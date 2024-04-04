import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Asociations() {
  return (
    <section id="Asociaciones"
      className=" flex flex-col h-screen justify-evenly my-16 lg:py-16 text-center"
    >
      <h1 className='text-5xl font-bold text-center'>
        Asociaciones
      </h1>
    <div
      className="flex flex-col lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] justify-items-center items-center"
    >
      <div className="m-6 md:p-8 flex flex-col justify-evenly items-center">
        <h2 className="hidden font-bold text-5xl/relaxed  drop-shadow-secondaryLight lg:block mb-4">
          Association for Computing Machinery
        </h2>
        <span className="font-bold text-4xl/relaxed rounded-3xl border-2 border-white p-2">
          ACM
        </span>
      </div>
      
      <Link
        href="https://studentchapterunsa.hosting.acm.org/"
        className="md:row-span-2" 
      >
        <Image src="/logos/ACM-logo.webp" width={300} height={300} className="rounded-full drop-shadow-standLight" />
      </Link>
      <p className='text-md/relaxed mx-16 rounded-3xl m-6 md:p-4 drop-shadow-secondaryLight'> 
        La ACM es una organización a nivel mundial que reúne a todos los profesionales, estudiantes, investigadores y a cada persona interesada en ciencias de la computación. Actualmente la ACM cuenta con más de 92000 miembros a nivel mundial y es reconocida como la asociación número uno para los profesionales en computación.
      </p>
    </div>
    

    </section>
  )
}
