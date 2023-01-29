import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Cards(props) {
  return (
    <>
    <div className='card' style={{backgroundColor:"black"}} >
        <Container className='mt-5' >
          <Row xs={1} md={3} className="g-5" >
          {props.details.map((value) => (
              <Col >
                <Card style={{ color: 'black', backgroundColor:'AliceBlue' }}>
                  <Card.Img variant="top" src={value.imgsrc} />
                  <Card.Body>
                    <Card.Title style={{fontWeight:'bold', color:'#4285F4'}}>{value.pname}</Card.Title>
                    <Card.Text>
                      {value.pabout}
                    </Card.Text>
                    <Card.Text style={{fontWeight:'bold'}}>
                      Language used: {value.planguage}
                    </Card.Text>
                    <Card.Link style={{ fontWeight: 'bold' }} href={value.codelink} target='_blank'>Code</Card.Link>
                    <Card.Link style={{ fontWeight: 'bold' }} href={value.sourcelink} target='_blank'>Source</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))} 
          </Row>
        </Container>
      </div>
      
    </>
  );
}

export default Cards;