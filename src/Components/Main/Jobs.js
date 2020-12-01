import { Table } from "react-bootstrap";

const Jobs = () => {
    return (
        <>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Company name</th>
      <th>Package</th>
      <th>HasBond</th>
      <th>BondNumberYr</th>
      <th>Role</th>
      <th>Job description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>TCS</td>
      <td>4.0</td>
      <td>yes</td>
      <td>2</td>
      <td>manager</td>
      <td>To manage clients</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Wipro</td>
      <td>6.0</td>
      <td>yes</td>
      <td>3</td>
      <td>associate developer</td>
      <td>coding</td>
    </tr>
    <tr>
    <td>2</td>
      <td>Amazon</td>
      <td>26.0</td>
      <td>no</td>
      <td>0</td>
      <td>sde-1</td>
      <td>coding and problem solving</td>
    </tr>
  </tbody>
</Table>

        </>
    )
}

export default Jobs;