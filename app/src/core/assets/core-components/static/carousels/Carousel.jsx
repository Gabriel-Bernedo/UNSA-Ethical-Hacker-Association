'use client'
import React, { useState } from 'react'
import CarouselItem from './CarouselItem'
import { Carousel, Typography } from '@material-tailwind/react'
function useIndex ({begin, length}) {
  const [index, setIndex] = useState(begin)

  function nextIndex(){
    setIndex((index + 1) % length)
  }

  function previousIndex(){
    setIndex((index - 1 + length) % length)
  }

  return {index, setIndex, nextIndex, previousIndex}
}


function renderItem({render, item, key}){
  if(render){
    return <CarouselItem item={item} key={key}/>
  } else {
    const Item = item
    return <Item key={key} />
  }
}



export default function MyCarousel({data, className, render}) {
  const {index, nextIndex, previousIndex} = useIndex({length: data.length, begin:0})

  return (
		<Carousel className={className || "rounded-xl"}>
			{data.map(function(item,key){
				return renderItem({render,item,key})
			})}
		</Carousel>
  )
}
