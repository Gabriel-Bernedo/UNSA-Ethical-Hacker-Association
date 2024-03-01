import React from 'react'
import VibringContainer from '@/components/ui/containers/VibringContainer'

export default function Hero() {
  return (
    <VibringContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 lg:mx-16">

        <div className="sm:w-1/1 p-5 col-span-2">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">Sobre Nosotros</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-5xl ">Sobre <span className="text-indigo-600">Nuestro Grupo Shell</span>
            </h2>
            <p class="text-gray-700 text-justify text-2xl">
              Somos un grupo de estudiantes apasionados y dedicados que hemos decidido aventurarnos en el fascinante mundo de la ciberseguridad. Procedentes de diversos orígenes académicos y experiencias, nos unimos bajo la bandera de la curiosidad y el deseo de aprender.
            </p>
          </div>
        </div>
        <div class="mt-12 md:mt-0 justify-center">
          <img className="object-cover rounded-lg dark:drop-shadow-bitDark drop-shadow-bitLight" src="/file.png" alt="" />
        </div>
      </div>	
    </VibringContainer>
  )
}
