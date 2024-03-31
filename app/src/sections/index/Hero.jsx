import React from 'react'
import VibringContainer from '@/components/ui/containers/VibringContainer'

export default function Hero({data, hero}) {
  return (
    <VibringContainer>
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="relative text-center md:text-right md:text-xl w-96 md:w-1/2">
          {data}
        </div>
        {hero}
      </div>
      
    </VibringContainer>
  )
}
