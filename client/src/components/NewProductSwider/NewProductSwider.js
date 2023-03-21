
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Card from 'react-bootstrap/Card';
import "./NewProductSwider.css";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addProduct } from '../../redux/cartRedux';
import {useSelector , useDispatch} from "react-redux";
const NewProductSwider = ({data}) => {

    const dispatch =  useDispatch();

    const handleClick=()=>{
        dispatch(addProduct(data))
    }
    const cart = useSelector((state) =>state.cart)
    console.log(cart)
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
                <SwiperSlide style={{ backgroundColor: "transparent", minWidth: "10rem" }} >
                    <Card style={{ maxHeight: "26rem", minWidth: "10rem" }}>



                        <Card style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "15px", left: "-1px", color: "white", borderRadius: "50px", backgroundColor: "green", transform: "rotate(-40deg)", marginTop: "-0.5rem", fontSize: "15px" }}>
                            <span className='p-1'> Yeni</span>
                        </Card>


                        <i onClick={handleClick} className="fa-regular fa-heart   fa-lg  p-2  " style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "10px", right: "2px", color: "red" }}></i>



                        <Card.Img style={{ minHeight: "16rem" }} variant="top" src="https://www.avizeci.com/wobby-collection-30-model-avize-sarkit-avize-aves-aydinlatma-wobby-1608-16-B.jpg" >


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
                                    <i  className="shoppingicon fa-solid fa-cart-shopping  mt-2" style={{ fontSize: "25px" }}></i>
                                </Col>
                            </Row>
                            <Card.Text className='container-fluid' style={{ display: "flex", flexDirection: "column", border: "1px", borderTopStyle: "solid", borderColor: "whitesmoke" }}>

                                <span className='float-start' style={{ fontWeight: "600" }}> Panasonic Beyaz Işık </span>
                                <span className='float-start' style={{ color: "orange", fontWeight: "800", text: "center", fontSize: "20px" }}> 399 TL  </span>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </SwiperSlide>

                <SwiperSlide style={{ backgroundColor: "transparent", minWidth: "10rem" }} >
                    <Card style={{ maxHeight: "26rem", minWidth: "10rem" }}>



                        <Card style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "15px", left: "-1px", color: "white", borderRadius: "50px", backgroundColor: "green", transform: "rotate(-40deg)", marginTop: "-0.5rem", fontSize: "15px" }}>
                            <span className='p-1'> Yeni</span>
                        </Card>


                        <i className="fa-regular fa-heart   fa-lg  p-2  " style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "10px", right: "2px", color: "red" }}></i>



                        <Card.Img style={{ minHeight: "16rem" }} variant="top" src="https://www.mylamp.com.tr/UserFiles/Image/images/AnyConv.com__yeni-evlenen-ciftler-icin-avize-secme-rehberi-1%20(1).png" >


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

                                <span className='float-start' style={{ fontWeight: "600" }}> Panasonic Beyaz Işık </span>
                                <span className='float-start' style={{ color: "orange", fontWeight: "800", text: "center", fontSize: "20px" }}> 399 TL  </span>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </SwiperSlide>

                <SwiperSlide style={{ backgroundColor: "transparent", minWidth: "10rem" }} >
                    <Card style={{ maxHeight: "26rem", minWidth: "10rem" }}>



                        <Card style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "15px", left: "-1px", color: "white", borderRadius: "50px", backgroundColor: "green", transform: "rotate(-40deg)", marginTop: "-0.5rem", fontSize: "15px" }}>
                            <span className='p-1'> Yeni</span>
                        </Card>


                        <i className="fa-regular fa-heart   fa-lg  p-2  " style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "10px", right: "2px", color: "red" }}></i>



                        <Card.Img style={{ minHeight: "16rem" }} variant="top" src="https://www.havadis07.com/wp-content/uploads/2018/03/priz-modeli.jpg" >


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

                                <span className='float-start' style={{ fontWeight: "600" }}> Panasonic Beyaz Işık </span>
                                <span className='float-start' style={{ color: "orange", fontWeight: "800", text: "center", fontSize: "20px" }}> 399 TL  </span>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundColor: "transparent", minWidth: "10rem" }} >
                    <Card style={{ maxHeight: "26rem", minWidth: "10rem" }}>



                        <Card style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "15px", left: "-1px", color: "white", borderRadius: "50px", backgroundColor: "green", transform: "rotate(-40deg)", marginTop: "-0.5rem", fontSize: "15px" }}>
                            <span className='p-1'> Yeni</span>
                        </Card>


                        <i className="fa-regular fa-heart   fa-lg  p-2  " style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "10px", right: "2px", color: "red" }}></i>



                        <Card.Img style={{ minHeight: "16rem" }} variant="top" src="https://cdn03.ciceksepeti.com/cicek/kc935132-1/XL/modern-retro-tarz-orumcek-avize-kc935132-1-1.jpg" >


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

                                <span className='float-start' style={{ fontWeight: "600" }}> Panasonic Beyaz Işık </span>
                                <span className='float-start' style={{ color: "orange", fontWeight: "800", text: "center", fontSize: "20px" }}> 399 TL  </span>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </SwiperSlide>

                <SwiperSlide style={{ backgroundColor: "transparent", minWidth: "10rem" }} >
                    <Card style={{ maxHeight: "26rem", minWidth: "10rem" }}>



                        <Card style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "15px", left: "-1px", color: "white", borderRadius: "50px", backgroundColor: "green", transform: "rotate(-40deg)", marginTop: "-0.5rem", fontSize: "15px" }}>
                            <span className='p-1'> Yeni</span>
                        </Card>


                        <i className="fa-regular fa-heart   fa-lg  p-2  " style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "10px", right: "2px", color: "red" }}></i>



                        <Card.Img style={{ minHeight: "16rem" }} variant="top" src="http://elektrikurunleri.xmlbankasi.com/image/data/resimler/de-pa-uclu-toprakli-golyat-fis-priz-5332.jpg" >


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

                                <span className='float-start' style={{ fontWeight: "600" }}> Panasonic Beyaz Işık </span>
                                <span className='float-start' style={{ color: "orange", fontWeight: "800", text: "center", fontSize: "20px" }}> 399 TL  </span>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundColor: "transparent", minWidth: "10rem" }} >
                    <Card style={{ maxHeight: "26rem", minWidth: "10rem" }}>



                        <Card style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "15px", left: "-1px", color: "white", borderRadius: "50px", backgroundColor: "green", transform: "rotate(-40deg)", marginTop: "-0.5rem", fontSize: "15px" }}>
                            <span className='p-1'> Yeni</span>
                        </Card>


                        <i className="fa-regular fa-heart   fa-lg  p-2  " style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "10px", right: "2px", color: "red" }}></i>



                        <Card.Img style={{ minHeight: "16rem" }} variant="top" src="https://productimages.hepsiburada.net/s/269/375/110000255317978.jpg" >


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

                                <span className='float-start' style={{ fontWeight: "600" }}> Panasonic Beyaz Işık </span>
                                <span className='float-start' style={{ color: "orange", fontWeight: "800", text: "center", fontSize: "20px" }}> 399 TL  </span>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </SwiperSlide>
            </Swiper>
        </Card.Body>
    </Card>






</div>
  )
}

export default NewProductSwider