import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Card from 'react-bootstrap/Card';
import "./LowerSliderCard.css";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const LowerCardSwiper = () => {
    return (



        <div className='container mt-3'>
            <Card>

                <Card.Body>
                    <Card.Title>İndirim'li Ürünler</Card.Title>
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



                                <Card style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "15px", left: "-5px", color: "white", borderRadius: "50px", backgroundColor: "green", transform: "rotate(-40deg)", marginTop: "-0.5rem", fontSize: "15px" }}>
                                    <span className='p-1'> İndirim</span>
                                </Card>


                                <i className="fa-regular fa-heart   fa-lg  p-2  " style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "10px", right: "2px", color: "red" }}></i>



                                <Card.Img style={{ minHeight: "16rem" }} variant="top" src="https://cdn-linens.mncdn.com/Content/Images/Thumbs/0053763_bl-jco-x13508b-liviana-abajur-23x23x33cm.jpeg" >


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
                                            <i class="shoppingicon fa-solid fa-cart-shopping  mt-2" style={{ fontSize: "25px" }}></i>
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



                                <Card style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "15px", left: "-5px", color: "white", borderRadius: "50px", backgroundColor: "green", transform: "rotate(-40deg)", marginTop: "-0.5rem", fontSize: "15px" }}>
                                    <span className='p-1'> İndirim</span>
                                </Card>


                                <i className="fa-regular fa-heart   fa-lg  p-2  " style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "10px", right: "2px", color: "red" }}></i>



                                <Card.Img style={{ minHeight: "16rem" }} variant="top" src="https://www.exoteak.com.tr/exoteak/urunler/galeri/kare-ahsap-abajur-s-5181jpeg" >


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
                                            <i class="shoppingicon fa-solid fa-cart-shopping  mt-2" style={{ fontSize: "25px" }}></i>
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



                                <Card style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "15px", left: "-5px", color: "white", borderRadius: "50px", backgroundColor: "green", transform: "rotate(-40deg)", marginTop: "-0.5rem", fontSize: "15px" }}>
                                    <span className='p-1'> İndirim</span>
                                </Card>


                                <i className="fa-regular fa-heart   fa-lg  p-2  " style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "10px", right: "2px", color: "red" }}></i>



                                <Card.Img style={{ minHeight: "16rem" }} variant="top" src="https://www.zeybekmarket.com/025-nyaf-h07v-k-nyaf-kablolar-4590-35-B.jpg" >


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
                                            <i class="shoppingicon fa-solid fa-cart-shopping  mt-2" style={{ fontSize: "25px" }}></i>
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



                                <Card style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "15px", left: "-5px", color: "white", borderRadius: "50px", backgroundColor: "green", transform: "rotate(-40deg)", marginTop: "-0.5rem", fontSize: "15px" }}>
                                    <span className='p-1'> İndirim</span>
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
                                            <i class="shoppingicon fa-solid fa-cart-shopping  mt-2" style={{ fontSize: "25px" }}></i>
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



                                <Card style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "15px", left: "-5px", color: "white", borderRadius: "50px", backgroundColor: "green", transform: "rotate(-40deg)", marginTop: "-0.5rem", fontSize: "15px" }}>
                                    <span className='p-1'> İndirim</span>
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
                                            <i class="shoppingicon fa-solid fa-cart-shopping  mt-2" style={{ fontSize: "25px" }}></i>
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



                                <Card style={{ cursor: "pointer", zIndex: "200", position: "absolute", top: "15px", left: "-5px", color: "white", borderRadius: "50px", backgroundColor: "green", transform: "rotate(-40deg)", marginTop: "-0.5rem", fontSize: "15px" }}>
                                    <span className='p-1'> İndirim</span>
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
                                            <i class="shoppingicon fa-solid fa-cart-shopping  mt-2" style={{ fontSize: "25px" }}></i>
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

export default LowerCardSwiper