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

export default function Carousel({data}) {
  const {index, nextIndex, previousIndex} = useIndex({length: data.length, begin:0})

  return (
		<Carousel className="rounded-xl" id=''>
			{data.map(function(e,i){
				return(
					<div key={i} className={"relative h-full w-full bg-cover " + e.cover}>
						<div className="absolute inset-0 grid h-full w-full place-items-start bg-black/75">
							<div className="ml-8 p-12 w-3/5 text-start ">
								<Typography
								variant="h1"
								color="white"
								className="mb-4 text-3xl uppercase text-justify"
								>
									{e.title}
								</Typography>
								<Typography
								variant="lead"
								color="white"
								className="opacity-80 text-justify text-xl"
								>
									{e.body}
								</Typography>
								<div className="flex justify-center gap-3">
								{/* // <Button size="sm" color="white" className="pt-2">
								// 	Más información
								// </Button> */}
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</Carousel>
  )
}
