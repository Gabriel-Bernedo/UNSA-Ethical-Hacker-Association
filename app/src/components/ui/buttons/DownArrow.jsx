'use client'

import React from 'react'
import Image from 'next/image'

export default function DownArrow() {
  function Move(){
		window.scroll({
      top: 635,
      behavior: "smooth",
    })
	}

  return (
    <div className="flex justify-center" 
    >
      <button
        onClick={Move}
      >
        <Image
          src="/flecha.png"
          className="dark:invert p-2 text-3xl opacity-50 hover:opacity-100 transition-colors border-slate-700 hover:border rounded-full hover:bg-slate-900 hover:bg-opacity-50 animate-bounce delay-200 duration-300 ease-in-out"
          width={50}
          height={50}	     
        />
      </button>
		</div>
  )
}
