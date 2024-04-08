"use client"
import React from 'react'
import CTF from './CTF'
import Soon from './Soon'
import MyCarousel from '@/static-components/carousels/Carousel'
const data = [
  // CTF,
  Soon,
]
export default function Activities() {
  return (
    <section id="Actividades" className="flex flex-col h-screen">
      <h2 className="text-5xl text-semibold text-center m-6">
        Actividades: 
      </h2>
      <MyCarousel data={data}></MyCarousel>
    </section>
  )
}
