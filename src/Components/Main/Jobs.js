import React, { useEffect } from "react";
import { Button, Table, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchJobs } from "../../redux/actions";
// import { useAlert } from "react-alert";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  const notify = () => toast("Thanks for Applying! We will get back to you");
const Jobs = (props) => {
  // const alert = useAlert();

  useEffect(() => {
    props.fetchJobs();
  }, []);


  return (

    <>
    <ToastContainer />
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
        {props.jobs.length > 0 ? props.jobs.map((job) => {
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
                <td><button onClick={notify} type="button" class="btn btn-primary">Apply</button></td>
              </tr>
            </tbody>
          )
        }) : null}

      </Table>


    </>
  )
}

const mapStateToProps = (state) => {
  return { jobs: state.jobs.jobsList };
}

export default connect(mapStateToProps, { fetchJobs })(Jobs);