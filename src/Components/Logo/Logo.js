import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Header from '../Header/Header';


function Logo(props) {
  return (
    <>
    
    <Navbar  bg="dark" variant="dark"  >
    <Container >
      <Navbar.Brand className='mx-4'  href="#home">
        <img
          alt=""
          src="./Image/LionLogo.svg"
          width="50"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        <span style={{fontWeight:'bold'}}>Dipanshu Raj</span>
      </Navbar.Brand>
    </Container>
    <Header/>
  </Navbar>
    </>
  );
}

export default Logo;