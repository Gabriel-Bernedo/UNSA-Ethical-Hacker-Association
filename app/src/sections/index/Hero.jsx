import React from 'react'
import VibringContainer from '@/components/ui/containers/VibringContainer'

export default function Hero({data, hero}) {
  return (
    <VibringContainer>
      <div className="relative w-1/2 text-right">
        {data}
      </div>
      {hero}
    </VibringContainer>
  )
}
