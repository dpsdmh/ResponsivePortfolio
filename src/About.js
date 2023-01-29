import React from 'react'
import { Container } from 'react-bootstrap'
import Skills from './Components/SkillsData/Skills'
function About(props) {
  return (
    <>
      
        <Container>

          <div className='my-4' style={{ fontSize: '60px', fontWeight: '500', color: 'LightGrey' }}>About Me</div>
          <div>
            <div style={{ color: 'Gainsboro', fontSize:'22px' }}>
              A fully stack developer, having knowledge in Java, Data Structure, JavaScript, React.JS, NodeJS, Redux, SQL, MySQL Seeking a beginner’s role to explore and enhance my technical knowledge gained at University hold a B.Tech Degree in Electronics and Telecommunication from Government engineering college Jagdalpur and completed a professional course in full stack web development from Newton School.
            </div>
          </div>
          <Skills/>

        </Container>
      

    </>
  )
}

export default About