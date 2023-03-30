
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Card from 'react-bootstrap/Card';
import "./NewProductSwider.css";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from "react-redux";


const NewProductSwider = () => {

    const [getproducts, setgetProducts] = useState([]);

    useEffect(() => {

        const getProducts = async () => {

            try {

                const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/product")
                const data = await res.json()
                setgetProducts(data)

            } catch (error) {
                console.log(error)
            }
        }

        getProducts();

    }, [getproducts])



    const dispatch = useDispatch();

    return (
        <div className='container mt-3'>
            <Card>

                <Card.Body>
                    <Card.Title>Yeni Ürünler</Card.Title>
                    <Swiper
                        style={{ backgroundColor: "transparent" }}
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            350: {
                                slidesPerView: 2.2,
                                spaceBetween: 5,
                            },
                            640: {
                                slidesPerView: 2.2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4.5,
                                spaceBetween: 5,
                            },

                            1080: {
                                slidesPerView: 5.2,
                                spaceBetween: 20,
                            },

                            1500: {
                                slidesPerView: 5.2,
                                spaceBetween: 20,
                            },
                            1700: {
                                slidesPerView: 5.2,
                                spaceBetween: 10,
                            },

                        }}

                        className="mySwiper "
                    >

                        {
                            getproducts.map((index, item) => {
                                const handleClick = () => {
                                    dispatch(addProduct({ ...index, quantity: 1 }))
                                }

                                return (


                                    <SwiperSlide style={{ backgroundColor: "transparent", minWidth: "10rem" }} key={item} onClick={handleClick} >
                                        <Card style={{ maxHeight: "26rem", minWidth: "10rem" }}>
                                            <Card style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "15px", left: "-1px", color: "white", borderRadius: "50px", backgroundColor: "green", transform: "rotate(-40deg)", marginTop: "-0.5rem", fontSize: "15px" }}>
                                                <span className='p-1'> Yeni</span>
                                            </Card>
                                            <i className="fa-regular fa-heart   fa-lg  p-2  " style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "10px", right: "2px", color: "red" }}></i>
                                            <Card.Img style={{ minHeight: "18rem" }} variant="top" src={index.img} >


                                            </Card.Img>

                                            <Card.Body >
                                                <Row >
                                                    <Col style={{ display: "flex", flexDirection: "column" }} >
                                                        <span className='d-flex justify-content-start' style={{ color: "deepskyblue", fontWeight: "300" }}>PANASONİC</span>
                                                        <div className='mb-2' style={{ display: "flex", color: "orange" }}>
                                                            <span className="fa fa-star" style={{ fontSize: "11px" }}></span>
                                                            <span className="fa fa-star" style={{ fontSize: "11px" }}></span>
                                                            <span className="fa fa-star" style={{ fontSize: "11px" }}></span>
                                                            <span className="fa fa-star" style={{ fontSize: "11px" }}></span>
                                                            <span className="fa fa-star" style={{ fontSize: "11px" }}></span>
                                                        </div>

                                                    </Col>

                                                    <Col className='d-flex justify-content-end align-items-start '>
                                                        <i className="shoppingicon fa-solid fa-cart-shopping  mt-2" style={{ fontSize: "25px" }}></i>
                                                    </Col>
                                                </Row>
                                                <Card.Text className='container-fluid' style={{ display: "flex", flexDirection: "column", border: "1px", borderTopStyle: "solid", borderColor: "whitesmoke" }}>

                                                    <span className='float-start' style={{ fontWeight: "600" }}> {index.title} </span>
                                                    <span className='float-start' style={{ color: "orange", fontWeight: "800", text: "center", fontSize: "20px" }}> {index.price}  </span>
                                                </Card.Text>

                                            </Card.Body>
                                        </Card>
                                    </SwiperSlide>
                                )
                            })
                        }



                    </Swiper>
                </Card.Body>
            </Card>






        </div>
    )
}

export default NewProductSwider