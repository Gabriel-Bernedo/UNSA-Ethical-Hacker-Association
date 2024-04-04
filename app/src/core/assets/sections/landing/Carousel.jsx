'use client'
import React from 'react'

import { carouselcontent } from '@/dominio/data/content';
import Carousel from '@/dominio/components/ui/carousels/Carousel';

export default function LandingPage(){
    return (
			<div id="Conocimiento" className="flex-col h-screen hidden md:flex pb-4">
				<h1 className='text-5xl text-semibold text-center m-8'> Algunos temas relacionados son :</h1>
				<Carousel data={carouselcontent} render/>
			</div>
    )
}