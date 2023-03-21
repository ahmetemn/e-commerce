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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const OffcanvasExample = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Topbar />
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="Navbar  container" >
          <Container fluid>
            <Navbar.Brand href="#">
              <Image className='navbarLogo px-4 ' src="https://i.hizliresim.com/scb08xy.png" />
            </Navbar.Brand>
            <Navbar.Toggle className='navbarToggle' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="navbarbody"
            >
              <Offcanvas.Header closeButton style={{ float: "end" }}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Image className='navbarLogo px-2 ' src="https://i.hizliresim.com/ewlmp2y.png" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='navbarbody'>
                {/*buraya yapacağımız işlem sadece vs  */}


                <Nav.Link className='navlink123' href="#action2">Link</Nav.Link>

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








              <div className='navbariconlar d-flex   '>

                <div className='navbarLogin d-flex '>
                  <Link to="/auth/login">
                    <i className="fa-solid fa-user fa-xl" >
                    </i>
                  </Link>
                    <span className=''>Giriş Yap & <Link to="/auth/register" style={{textDecoration:"none"}}> <span style={{ color: "#8ad3eb" }}>Üye Ol</span></Link></span>                  
                </div>
             





                <Nav.Link href="#action2" >
                  <i className="navcargoicon fa-solid fa-truck fa-xl" ></i>

                </Nav.Link>
                <span className='d-flex '>Kargom Nerede </span>








                <Nav.Link href="#action2">



                  <i className="navboxicon fa-solid fa-basket-shopping fa-xl ">

                    <Badge className='navBadge' pill bg="danger" style={{ fontSize: "12px" }}>{cart.products.length}</Badge>


                  </i>


                </Nav.Link>
              </div>


            </Nav>

          </Container>
        </Navbar>
      ))}

    </>
  )
}

export default OffcanvasExample;