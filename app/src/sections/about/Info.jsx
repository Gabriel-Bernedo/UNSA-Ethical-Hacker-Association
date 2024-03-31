import React from 'react'
import { about } from '@/components/data/data'
import InfoCard from '@/components/ui/cards/InfoCard'

export default function Info() {
  return (
    <div className="mx-4 z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-2 ">
      {about.info.map(function(e,i){
        return (<InfoCard data={e} key={i} className={(i==2) ? "md:col-span-2 lg:col-span-1" : ""}/>)
      })}
    </div>
  )
}

/*
<div>
        <article className="relative overflow-visible rounded-lg shadow transition hover:shadow-lg">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/prueba.jpeg"
            alt=""
          />
          <div className="relative bg-gradient-to-t from-gray-900/50 from-gray-900/25  pt-32 sm:pt-48 lg:pt-40">
            <div className="p-4 sm:p-6">
              <h3 className="mt-0.5 text-lg text-white font-bold">
                Nuestra Mision:
              </h3>
              <p className="mt-2 line-clamp-10 text-sm/relaxed text-stone-300 text-justify">
                Como estudiantes en el campo de la ciberseguridad, estamos
                comprometidos a estar en la vanguardia de la protección digital.
                Buscamos identificar y abordar las últimas amenazas y
                vulnerabilidades, desarrollar soluciones innovadoras y promover
                prácticas de seguridad sólidas en todos los aspectos de la vida
                digital, y participar en respectivos eventos CTF.
              </p>
            </div>
          </div>
        </article>
      </div>
*/