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
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';

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
              <Offcanvas.Body >
                {/*buraya yapacağımız işlem sadece vs  */}


                <Nav.Link className='navlink123' href="#action2">Link</Nav.Link>

              </Offcanvas.Body>
            </Navbar.Offcanvas>


            <Nav className="justify-content-between flex-grow-1 px-4  ">
              <Form className="inputForm d-flex justify-content-center container">
                <Form.Control
                  className='navFormControl'
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"

                />
                <Button className='navFormButton' variant="outline-primary"><i className="fa-solid fa-magnifying-glass"></i></Button>
              </Form>









              <div className='navbariconlar d-flex   '>

                <div className='navbarLogin d-flex '>

                </div>



                <div class="dropdown">

                  <i className="dropbtn fa-solid fa-user fa-xl p-2 mt-2" >

                  </i>
                  <span className='mt-2'>Giriş Yap</span>

                  <div class="dropdown-content">
                    <Link to="/auth/register">
                      <span className='mt-2'>Giriş Yap</span>
                    </Link>

                    <Link to="/auth/register">
                      <span className='mt-2'>Kaydol</span>
                    </Link>

                  </div>
                </div>




                <Link to="fav" >

                  <i class="fa-solid fa-heart fa-xl p-2 mt-2"></i>

                </Link>
                <span className='mt-1'>Favorilerim</span>


                <div className="mb-2">
               
                </div>





                <div class="dropdown ">

                  <Link to="box">
                    <i className="navboxicon fa-solid fa-basket-shopping fa-xl  p-2 mt-2">
                      <Badge className='navBadge' pill bg="danger">{cart.products.length}</Badge>
                    </i>
                  </Link>
                  <span className='mt-1' style={{ zIndex: "2000", marginLeft: "-7px" }}>Sepet</span>

                  <div class="dropdown-content dropleft">
                    <div >
                      <Row  >
                        <Col className='d-flex justify-content-between'>
                          <Col >
                            <div>
                              <Image style={{ maxWidth: "85px" }} className="p-1" src='https://cdn.cimri.io/image/320x320/sinem-avize-albert-2li-ledli-avize_440019392.jpg'></Image>
                            </div>
                          </Col>

                          <Col >
                            <div>
                              Tekir Elektrik Avize
                            </div>
                          </Col>

                        </Col>
                      </Row>
                    </div>
                  </div>
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