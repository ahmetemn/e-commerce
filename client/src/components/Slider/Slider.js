import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const Slider = () => {
  return (
    <Carousel  className='container d-flex justify-content-center mt-1'>
      <Carousel.Item    interval={1000}>
        <img
        className="d-block w-100"
          src="https://www.starakim.com/Data/EditorFiles/enerji-kablo-hes-oznur.jpg"
          alt="First slide"
        />
        <Carousel.Caption>


        </Carousel.Caption>
      </Carousel.Item>
     


      <Carousel.Item    interval={1000}>
        <img
        className="d-block w-100"
          src="https://www.starakim.com/Data/EditorFiles/CATA/teklif.png"
          alt="First slide"
        />
        <Carousel.Caption>


        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider