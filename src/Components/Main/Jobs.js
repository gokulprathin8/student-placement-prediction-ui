import React, { useEffect } from "react";
import { Button, Table, Alert } from "react-bootstrap";
import ToggleButton from 'react-bootstrap/ToggleButton'
import { connect } from "react-redux";
import { fetchJobs } from "../../redux/actions";

const onJobApply = () => {
  return (
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This example
          text is going to run a bit longer so that you can see how spacing within an
          alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things nice
          and tidy.
        </p>
      </Alert>
  )
}


const Jobs = (props) => {
  useEffect(() => {
    props.fetchJobs();
  }, []);


  return (
    <>
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
          { props.jobs.length > 0 ? props.jobs.map((job) => {
            return (
            <tbody>
            <tr>
              <td>{job.id}</td>
              <td>{job.companyName}</td>
              <td>{job.package}</td>
              <td>{job.hasBond.toString()}</td>
              <td>{job.bondYears}</td>
              <td>{job.role}</td>
              <td>{job.jobDescription}</td>
              <td><Button   onChange={onJobApply} type="button" class="btn btn-primary">Apply</Button></td>
            </tr>
            </tbody>
            )
          }) : null  }

        </Table>


    </>
  )
}

const mapStateToProps = (state) => {
  return { jobs: state.jobs.jobsList };
}

export default connect(mapStateToProps, { fetchJobs })(Jobs);