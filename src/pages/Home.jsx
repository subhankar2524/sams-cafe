import React from 'react'
import NavBar from '../components/NavBar'
import Carousel from '../components/home-component/Carousel'
import Display from '../components/home-component/Display'
import About from '../components/home-component/About'

const Home = () => {
  return (
    <>
      <NavBar />
      <Carousel />
      <About /> 
      <Display />
    </>
  )
}

export default Home