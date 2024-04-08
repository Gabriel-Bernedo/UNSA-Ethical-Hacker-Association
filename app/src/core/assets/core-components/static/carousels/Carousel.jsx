'use client'
import React, { useState } from 'react'
import CarouselItem from './CarouselItem'
import { Carousel, Typography } from '@material-tailwind/react'

function renderItem({render, item, key}){
  if(render){
    return <CarouselItem item={item} key={key}/>
  } else {
    const Item = item
    return <Item key={key} />
  }
}

export default function MyCarousel({data, className, render}) {

  return (
		<Carousel className={className || "rounded-xl"}>
			{data.map(function(item,key){
				return renderItem({render,item,key})
			})}
		</Carousel>
  )
}
