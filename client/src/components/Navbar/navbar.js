import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Topbar from '../Topbar/Topbar';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image'
import "./navbar.css"
const OffcanvasExample = () => {
  return (

    <>


      <Topbar />

      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="Navbar mb-3 container" >
          <Container fluid>

            <Navbar.Brand href="#">
              <Image className='navbarLogo' src="https://i.hizliresim.com/ewlmp2y.png" />
            </Navbar.Brand>

            <Navbar.Toggle  className='navbarToggle' aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"

            >
              <Offcanvas.Header closeButton  style={{float:"end"}}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Image className='navbarLogo px-2 ' src="https://i.hizliresim.com/ewlmp2y.png" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Nav className="justify-content-between flex-grow-1 px-4  ">

              <div className='navForm d-flex justify-content-center container'>
                <Form className="navformbtninput d-flex justify-content-center container">
                  <Form.Control
                    className='navFormControl'
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"

                  />
                  <Button className='navFormButton' variant="outline-primary"><i className="fa-solid fa-magnifying-glass"></i></Button>
                </Form>
              </div>

            <div className='navbariconlar'>

              <div className='navFormIcons d-flex '>

                <div className='navbarLogin d-flex  justify-content-between  flex-grow-1'>
                  <Nav.Link href="#action1">
                    <i className="fa-solid fa-user fa-xl" >
                    </i>
                  </Nav.Link>
                  <span>Giriş Yap &<span style={{ color: "#8ad3eb" }}>Üye Ol</span></span>
                </div>



               
              
                <Nav.Link  href="#action2">
                  <i className="fa-solid fa-truck fa-xl" ></i>
                </Nav.Link>
                <span>Kargom Nerede </span>
                    
              



               

                
                <Nav.Link href="#action2">

                  <div className='navboxicon mt-2'>
                
                    <i className=" fa-solid fa-basket-shopping fa-xl ">
                    
                    <Badge className='navBadge' pill bg="danger">9</Badge>
                    
                    
                    </i>
                  </div>
                </Nav.Link>
                </div>
              </div>
             
            </Nav>

          </Container>
        </Navbar>
      ))}

    </>
  )
}

export default OffcanvasExample;