import { Button, Table } from "react-bootstrap";

const Jobs = () => {
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
  <tbody>
    <tr>
      <td>1</td>
      <td>TCS</td>
      <td>4.0</td>
      <td>yes</td>
      <td>2</td>
      <td>manager</td>
      <td>To manage clients</td>
      <td><Button type="button" class="btn btn-primary">Apply</Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Wipro</td>
      <td>6.0</td>
      <td>yes</td>
      <td>3</td>
      <td>associate developer</td>
      <td>coding</td>
      <td><Button type="button" class="btn btn-primary">Apply</Button></td>
    </tr>
    <tr>
    <td>3</td>
      <td>Amazon</td>
      <td>26.0</td>
      <td>no</td>
      <td>0</td>
      <td>sde-1</td>
      <td>coding and problem solving</td>
      <td><Button type="button" class="btn btn-primary">Apply</Button></td>
    </tr>
  </tbody>
</Table>


        </>
    )
}

export default Jobs;