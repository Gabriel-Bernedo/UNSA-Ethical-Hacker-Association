import React from 'react'
import VibringContainer from '@/components/ui/containers/VibringContainer'
import ToolContainer from '@/components/ui/containers/ToolContainer'
import { resources } from '@/components/data/data'

export default function page() {
  return (
    <div>
      <main className="p-16 h-screen">
      <h1 className="text-2xl font-semibold text-center">¿Alguna herramienta que te interese?</h1>
      <VibringContainer>
        <div className="overflow-y-auto h-96 p-4 grid grid-cols-2 gap-4">
          {resources.tools.map(function(e,i){
            return <ToolContainer data={e} key={i} />
          })}
        </div>
      </VibringContainer>
    </main>
    </div>
  )
}
