import React from 'react'
import Image from 'next/image'

import VibringContainer from '@/static-components/containers/VibringContainer'
import WhatsappButton from '@/static-components/buttons/WhatsappButton'
export default function About(){
  return (
    <VibringContainer>
      <section id="Nosotros" className="flex align-center items-center justify-center overflow-hidden p-5 h-screen">
        <div className="md:grid md:grid-cols-3 items-center gap-8 lg:mx-16">
        <div className="sm:w-1/1 md:p-5 p-3 col-span-2">
        <div className="text">
        <span className="text-gray-500 border-b-2 border-secondary-2 uppercase">Sobre Nosotros</span>
        <h2 className="my-4 font-bold text-3xl  sm:text-5xl ">Sobre <span className="text-primary-2">Nuestro Grupo UEHA</span>
        </h2>
        <p className="opacity-50 text-justify md:text-2xl text-md">
        Somos un grupo de estudiantes apasionados y dedicados que hemos decidido aventurarnos en el fascinante mundo de la ciberseguridad. Procedentes de diversos orígenes académicos y experiencias, nos unimos bajo la bandera de la curiosidad y el deseo de aprender.
        </p>
        </div>
        <div className="hidden md:block">
        <WhatsappButton className="translate-x-3/4 translate-y-1/2 "/>
        </div>
        </div>
        <div className="flex flex-col md:mt-0 items-center justify-center">
        <Image src="/logos/logonew.svg" 
        className=" p-0 g-image" 
        height={300} 
        width={300} 
        alt=""
        />
        <div className="flex justify-around md:hidden m-4">
        <WhatsappButton className=" "/>
        </div>
        </div>
        </div>	
      </section>
    </VibringContainer>
  )
}