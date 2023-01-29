import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundAnimation from './Components/BackgroundAnimation';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import ResumeBtn from './Components/ResumeBtn';



function Home(props) {
  const [text] = useTypewriter({
    words: ['Electronics & Telecom Engineer',
    'Frontend Developer',
      'Web Developer',
      'Software Developer'
      
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50
  });

  return (
    <>
    
      <Container >
        <div className='d-flex justify-content-center' >
       
          <div className="d-flex container-fluid align-items-center">
            <div className='d-block align-top position-absolute' >
              <span style={{ fontSize: '3.3em' }}>Hello I'm</span>
              <p style={{ fontSize: '5.5em' }}>Dipanshu Raj</p>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'lime'}}> {text} </span>
              <span style={{ color: 'firebrick' }}> <Cursor /></span>
              <div style={{marginBottom:'10%'}}>
              </div>
              <div>
              <ResumeBtn/>
              </div>

              <div className='d-flex justify-content-center'>
              <MDBBtn className= 'm-4'  style={{ backgroundColor: '#55acee'}} href='https://twitter.com/Dpsdmh' target='_blank'>
                <MDBIcon fab icon='twitter' />
              </MDBBtn>
              <MDBBtn className='m-4' style={{ backgroundColor: '#0082ca' }} href='https://www.linkedin.com/in/dipanshu-raj-5740791a0/' target='_blank'>
                <MDBIcon fab icon='linkedin-in' />
              </MDBBtn>
              <MDBBtn className='m-4'  style={{ backgroundColor: '#333333' }} href='https://github.com/dpsdmh' target='_blank'>
                <MDBIcon fab icon='github' />
              </MDBBtn>
          </div>
            </div>
          </div>
          
          <BackgroundAnimation />
         
          
        </div>
      </Container>
      
    </>
  )
}

export default Home