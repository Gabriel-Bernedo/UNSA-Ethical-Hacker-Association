import React, { FC, Fragment } from 'react'

import Navigation from '@/static-components/navs/Navigation'

import Hero from '@/sections/landing/Hero'
import About from '@/sections/landing/About'
import More from '@/sections/landing/More'
import Asociations from '@/sections/about/Asociations'
import Carousel from '@/sections/landing/Carousel'
import Activities from '@/sections/landing/Activities'
import Footer from '@/sections/landing/Footer'

import { landingNav as navigation} from '@/data/navigation'

interface PageProps {

}

export const LandingPage : FC<PageProps> = () => {
  return (
    <Fragment>
      <Navigation nav={navigation}/>
      <main className="w-full">
        <Hero/>
        <About/>
        <More />
        <Asociations/>
        <Carousel />
        <Activities />
        <Footer />
      </main>
    </Fragment>
  )
}
