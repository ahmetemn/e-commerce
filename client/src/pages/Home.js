
import React , {useState} from 'react'
import LowerCardSwiper from '../components/LowerSliderCard/LowerCardSwiper'
import ProductLinkCard from '../components/ProducLinkCard/ProductLinkCard'
import SecondNav from '../components/SecondNav/SecondNav'
import Slider from '../components/Slider/Slider'
import NewProductSwider from '../components/NewProductSwider/NewProductSwider'

const Home = () => {
  const [data ] = useState("ahmet nasılsın ")
  return (
    <div>
      <SecondNav />
      <Slider></Slider>
      <LowerCardSwiper/>
      <ProductLinkCard />
      <NewProductSwider  data={data}/>
    </div>
  )
}

export default Home