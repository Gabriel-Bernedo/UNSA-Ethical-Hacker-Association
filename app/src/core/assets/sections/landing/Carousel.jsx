'use client'
import React from 'react'

import { carouselcontent } from '@/data/content';
import MyCarousel from '@/static-components/carousels/Carousel';
export default function Carousel(){
    return (
			<div id="Conocimiento" className="flex-col h-screen hidden md:flex pb-4">
				<h1 className='text-5xl text-semibold text-center m-8'> Algunos temas relacionados son :</h1>
				<MyCarousel data={carouselcontent} render/>
			</div>
    )
}