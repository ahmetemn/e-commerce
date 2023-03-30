import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SecondNav from '../../components/SecondNav/SecondNav';
import { useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image'


const Box = () => {

    const cart = useSelector((state) => state.cart);

    console.log(cart)

    return (

        <>

            <SecondNav />

            <Container>
                <Row >
                    <Col sm={10} className='mt-2  container' >
                        {
                            cart.products.map((item) => {



                                return (
                                    <>
                                        <Card  className='mt-2' key={item._id}>
                                            <Card.Header style={{ backgroundColor: "#baeee0", color: "black", fontWeight: "600" }} >Ürünler</Card.Header>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item  >
                                                    <Row className=''>
                                                        <Col className="d-flex justify-content-start  align-items-center">

                                                            <Image style={{ maxWidth: "2rem" }} src={item.img} />

                                                        </Col>

                                                        <Col className="d-flex  justify-content-center  align-items-center">

                                                            <span style={{fontWeight:"600"}}>{item.title}</span>
                                                        </Col>



                                                        <Col className="d-flex justify-content-center  align-items-center">
                                                           
                                                        <i class="fa-solid fa-circle-minus px-1"></i>  <span style={{fontWeight:"600"}}>0</span> <i class="fa-solid fa-circle-plus px-1"></i>

                                                        </Col>


                                                        <Col className="d-flex justify-content-center  align-items-center">

                                                             <span style={{fontWeight:"600"}}>{item.price} TL</span>

                                                        </Col>


                                                        <Col className="d-flex justify-content-center  align-items-center">

                                                        <i class="fa-solid fa-trash" style={{color:"red"}}></i>
                                                        </Col>


                                                    </Row>


                                                </ListGroup.Item>

                                            </ListGroup>
                                        </Card>

                                    </>
                                )
                            })
                        }
                    </Col>


                    {
                        cart.products.length === 0 ? <span className='d-flex justify-content-center' style={{fontWeight:"600"}}>Sepet Boş </span>

                            : <Col className='mt-3'>
                                <Card style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px", maxWidth: "10rem" }} className>
                                    <Card.Header style={{ backgroundColor: "#8ad3eb", color: "white", fontWeight: "600" }}>Siparişler</Card.Header>
                                    <ListGroup variant="flush" className=''>

                                        <ListGroup.Item style={{ border: "none" }}>

                                            <Row>
                                                <Col style={{ fontSize: "13px", fontWeight: "600" }}>Ürün Fiyatı</Col>
                                                <Col style={{ fontSize: "14px", fontWeight: "600" }}>{cart.total}</Col>
                                            </Row>

                                        </ListGroup.Item>




                                        <ListGroup.Item style={{ border: "none" }}>

                                            <Row>
                                                <Col style={{ fontSize: "13px", fontWeight: "600" }}>Kdv</Col>
                                                <Col style={{ fontSize: "14px", fontWeight: "600" }}>{(cart.total*18)/100}</Col>
                                            </Row>

                                            <hr></hr>
                                            <Row>
                                                <Col style={{ fontSize: "13px", fontWeight: "600" }}>Toplam</Col>
                                                <Col style={{ fontSize: "14px", fontWeight: "600" }}>{((cart.total*18)/100) +(cart.total) }</Col>
                                            </Row>
                                        </ListGroup.Item>



                                    </ListGroup>
                                </Card>
                            </Col>
                    }
                </Row>




            </Container>








        </>
    )
}

export default Box; 