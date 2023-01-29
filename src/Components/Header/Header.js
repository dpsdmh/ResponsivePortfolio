import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router } from 'react-router-dom';

function Header(props) {
  return (
    <>
      <Router>
        <Nav className="mx-5" justifycontent="end" activeKey="/" style={{ fontWeight: 'bolder' }}>

          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/project">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link  href="mailto:dpsdmh@gmail.com">Contact</Nav.Link>
          </Nav.Item>

        </Nav>
      </Router>

    </>

  )
}

export default Header