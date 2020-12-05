import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchJobs } from "../../redux/actions";

const Jobs = (props) => {
  useEffect(() => {
    props.fetchJobs();
  }, []);


  return (
    <>
    {console.log(props.jobs)}
      {props.jobs.length > 0 ? (props.jobs.map((job) => {
        <Table striped style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Package</th>
              <th>HasBond</th>
              <th>Bond</th>
              <th>Role</th>
              <th>Job description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{job.id}</td>
              <td>{job.companyName}</td>
              <td>{job.package}</td>
              <td>{job.hasBond}</td>
              <td>{job.bondYears}</td>
              <td>{job.role}</td>
              <td>{job.jobDescription}</td>
              <td><Button type="button" class="btn btn-primary">Apply</Button></td>
            </tr>
          </tbody>
        </Table>
      }
      )

      ) : null}
    </>
  )
}

const mapStateToProps = (state) => {
  return { jobs: state.jobs.jobsList };
}

export default connect(mapStateToProps, { fetchJobs })(Jobs);