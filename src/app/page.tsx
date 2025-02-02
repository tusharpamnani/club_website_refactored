import Footer from '@/components/Footer'
import AimComponent from '@/components/Home/AimComponent'
import Carousel from '@/components/Home/Carousel'
import DomainComponent from '@/components/Home/DomainComponent'
import Home from '@/components/Home/Hero'
import React from 'react'

const page = () => {
  return (
    <>
      <Home/>
      <Carousel/>
      <AimComponent/>
      <DomainComponent/>
      <Footer/>
    </>
  )
}

export default page
