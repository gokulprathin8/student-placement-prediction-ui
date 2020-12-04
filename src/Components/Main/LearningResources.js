import { Button, Card, Col, Row } from "react-bootstrap";

const LearningResources = () => {
    return (
        <>
<Row>
<div style={{ padding: "20px" }}></div>
<Card style={{ width: '18rem' }}>
<Card.Body>
    <Card.Title>Dbms material</Card.Title>
    <Card.Text>
      Dbms learning resources 
    </Card.Text>
    <Button href="https://www.javatpoint.com/dbms-tutorial">Dbms Material</Button>
  </Card.Body>
</Card>
<div style={{ padding: "20px" }}></div>
<Card style={{ width: '18rem' }}>
<Card.Body>
    <Card.Title>C Programming material</Card.Title>
    <Card.Text>
    C Programming learning resources 
    </Card.Text>
    <Button href="https://www.programiz.com/c-programming">C Programming Material</Button>
  </Card.Body>
</Card>

</Row> 



        </>
    )
}

export default LearningResources;