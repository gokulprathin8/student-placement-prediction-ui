import { Button, Card, Row ,Col } from "react-bootstrap";

const Faculty = () => {
    return (
        <>
    
<Row>

<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://staffphotos.gitam.edu/10388.jpg" />
  <Card.Body>
    <Card.Title>Rahul K</Card.Title>
    <Card.Text>
    Rahul has inspired many students fulfil their dreams
    </Card.Text>
    <Button href="rahulk@gmail.com">Contact Vishwas</Button>
  </Card.Body>
</Card>
</Col>

<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://staffphotos.gitam.edu/10202.jpg" />
  <Card.Body>
    <Card.Title>Vishwas M</Card.Title>
    <Card.Text>
      Vishwas has inspired many students fulfil their dreams
    </Card.Text>
    <Button href="rahulk@gmail.com">Contact Vishwas</Button>
  </Card.Body>
</Card>
</Col>

<Col>
<div style={{ padding: "20px" }}></div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://staffphotos.gitam.edu/1944.jpg" />
  <Card.Body>
    <Card.Title>Vishwas M</Card.Title>
    <Card.Text>
      Vishwas has inspired many students fulfil their dreams
    </Card.Text>
    <Button href="rahulk@gmail.com">Contact Vishwas</Button>
  </Card.Body>
</Card>
</Col>

<Col>
<div style={{ padding: "20px" }}></div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://staffphotos.gitam.edu/10391.jpg" />
  <Card.Body>
    <Card.Title>Vishwas M</Card.Title>
    <Card.Text>
      Vishwas has inspired many students fulfil their dreams
    </Card.Text>
    <Button href="rahulk@gmail.com">Contact Vishwas</Button>
  </Card.Body>
</Card>
</Col>

</Row>
        </>
    )
}

export default Faculty;