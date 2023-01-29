import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import TechSkill from './TechSkill';
import IndustryCertificate from './IndustryCertificate';
import ScholasticsAchievement from './Scholastics Achievement';



function Skills() {
  return (
    <>
    <div className='my-5'>
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item className='my-3' style={{backgroundColor:'DarkCyan', fontWeight:'bold'}} action href="#link1">
            Technical Skills
            </ListGroup.Item>
            <ListGroup.Item className='my-3' style={{backgroundColor:'Turquoise', fontWeight:'bold'}} action href="#link2">
            Industry Certification
            </ListGroup.Item>
            <ListGroup.Item className='my-3' style={{backgroundColor:'MediumAquaMarine', fontWeight:'bold'}} action href="#link3">
            Scholastics Achievement
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">
            <TechSkill/>
            </Tab.Pane>
            <Tab.Pane eventKey="#link2">
             <IndustryCertificate/>
            </Tab.Pane>
            <Tab.Pane eventKey="#link3">
             <ScholasticsAchievement/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
    </>
  );
}

export default Skills;