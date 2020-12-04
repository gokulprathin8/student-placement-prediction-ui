import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Notifications = () => {
    return (
        <>
        <Table striped style={{ textAlign: "center" }}>
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Image</th>
      <th>Message</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Exam Upcoming</td>
      <td>Otto</td>
      <td>exams start from tommorow</td>
    <td><Button type="button" class="btn btn-primary"> <FontAwesomeIcon icon={faTrash} /> </Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Upcoming Drives</td>
      <td>Thornton</td>
      <td>Azazom is visting our campus for hiring</td>
      <td><Button type="button" class="btn btn-primary">  <FontAwesomeIcon icon={faTrash} />  </Button></td>
    </tr>
    <tr>
      <td>3</td>
      <td >People Hired</td>
      <td>hello</td>
      <td>Contain list of people hired</td>
      <td><Button type="button" class="btn btn-primary">  <FontAwesomeIcon icon={faTrash} />  </Button></td>
    </tr>
  </tbody>
</Table>


        </>
    )
}

export default Notifications;