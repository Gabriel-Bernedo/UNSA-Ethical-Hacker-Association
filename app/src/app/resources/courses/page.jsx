import React from 'react'
import { resources } from '@/components/data/data'
import CourseContainer from '@/components/ui/containers/CourseContainer'
import VibringContainer from '@/components/ui/containers/VibringContainer'

export default function page() {
  return (
    <main className="p-16 h-screen">
      <h1 className="text-2xl font-semibold text-center">¿Algun material que te interese?</h1>
      <VibringContainer>
        <div className="overflow-y-auto h-96 p-4">
          {resources.courses.map(function(e,i){
            return <CourseContainer data={e} key={i} />
          })}
        </div>
      </VibringContainer>
    </main>
  )
}
