import React from 'react'

export default function MyImageBanner({children, bgCover, bgPosition}) {
  return (
    <div className={`relative h-96 w-full bg-cover ${bgCover} ${bgPosition}`}>
      <div class="absolute inset-0 transition ease-in
        backdrop-blur bg-black bg-opacity-50 hover:backdrop-blur-sm hover:bg-opacity-30
        flex flex-col items-center justify-center
        text-white
        "
      >
        {children}
      </div>
    </div>
  )
}
