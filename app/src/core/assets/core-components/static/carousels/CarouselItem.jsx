import React from 'react'
import { Typography } from '@material-tailwind/react'
export default function CarouselItem({item}) {
  return (
    <div className={"relative h-full w-full bg-cover " + item.cover}>
      <div className="absolute inset-0 grid h-full w-full place-items-start bg-black/75">
        <div className="ml-8 p-12 w-3/5 text-start ">
          <h1
          className="mb-4 text-3xl uppercase text-justify"
          >
            {item.title}
          </h1>
          <p
          className="opacity-80 text-justify text-xl"
          >
            {item.body}
          </p>
          <div className="flex justify-center gap-3">
          </div>
        </div>
      </div>
    </div>
  )
}
