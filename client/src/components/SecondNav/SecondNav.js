import React from 'react'
import Nav from 'react-bootstrap/Nav';
import "./SecondNav.css"
const SecondNav = () => {
  return (
    <div className='secondNav'>

<Nav
        style={{backgroundColor:"whitesmoke" , height:"70px"}}
      className='container-fluid    d-flex justify-content-center p-3 '
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
       
      </Nav.Item>
    </Nav>

    </div>
  )
}

export default SecondNav