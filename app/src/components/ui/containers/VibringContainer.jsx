'use client'
import React from 'react'

export default function VibringContainer({children}) {
  return (
    <div className="relative flex place-items-center justify-evenly
      before:absolute before:h-[300px] before:w-full 
      sm:before:w-[480px] before:-translate-x-1/4 before:rounded-full 
      before:bg-gradient-to-br before:from-primary-1 before:to-transparent before:blur-2xl 
      before:content-[''] 

      before:transition before:duration-300 before:delay-100
      before:ease-in-out
      after:transition after:duration-300 after:delay-75
      after:ease-in-out
      z-[10] before:z-[-1]
      
      pointer-events-none
      "
    >
      {children}
    </div>
  )
}
