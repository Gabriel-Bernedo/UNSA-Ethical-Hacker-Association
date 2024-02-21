import React from 'react'
import Testing1 from '@/components/test/Testing1'

export default function page() {
  return (
    <div className="p-10">
      <div className= "text-center text-5xl font-serif font-bold">
        <h1>SOBRE NOSOTROS</h1>
      </div>

      <div className="p-16 mx-9">
        <div className="mx-11">
          <p className="text-justify text-2xl">
          Somos un grupo de estudiantes apasionados y dedicados que hemos decidido aventurarnos en el fascinante mundo de la ciberseguridad. Procedentes de diversos orígenes académicos y experiencias, nos unimos bajo la bandera de la curiosidad y el deseo de aprender.
          </p>
        </div>
      </div>
      <Testing1 />      
    </div>
  )
}
