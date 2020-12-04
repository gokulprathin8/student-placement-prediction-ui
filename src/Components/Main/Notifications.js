import { Button, Table } from "react-bootstrap";

const Notifications = () => {
    return (
        <>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Notification Title</th>
      <th>Notification Image</th>
      <th>Notification Body</th>
      <th>Click to clear Notifications</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Exam Upcoming</td>
      <td>Otto</td>
      <td>exams start from tommorow</td>
      <td><Button type="button" class="btn btn-primary">Clear Notifications</Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Upcoming Drives</td>
      <td>Thornton</td>
      <td>Azazom is visting our campus for hiring</td>
      <td><Button type="button" class="btn btn-primary">Clear Notifications</Button></td>
    </tr>
    <tr>
      <td>3</td>
      <td >People Hired</td>
      <td>hello</td>
      <td>Contain list of people hired</td>
      <td><Button type="button" class="btn btn-primary">Clear Notifications</Button></td>
    </tr>
  </tbody>
</Table>


        </>
    )
}

export default Notifications;