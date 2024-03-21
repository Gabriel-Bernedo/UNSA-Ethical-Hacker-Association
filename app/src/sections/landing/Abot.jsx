import React from 'react'
import Image from 'next/image'
import VibringContainer from '@/components/ui/containers/VibringContainer'
import WhatsappButton from '@/components/ui/buttons/WhatsappButton'
export default function LandingPage(){
    return (
        <VibringContainer>
            <section id="Nosotros" className="flex align-center items-center justify-center overflow-hidden p-5 h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 lg:mx-16">
                    <div className="sm:w-1/1 p-5 col-span-2">
                        <div className="text">
                            <span className="text-gray-500 border-b-2 border-secondary-2 uppercase">Sobre Nosotros</span>
                            <h2 className="my-4 font-bold text-3xl  sm:text-5xl ">Sobre <span className="text-primary-2">Nuestro Grupo UEHA</span>
                            </h2>
                            <p className="opacity-50 text-justify text-2xl">
                            Somos un grupo de estudiantes apasionados y dedicados que hemos decidido aventurarnos en el fascinante mundo de la ciberseguridad. Procedentes de diversos orígenes académicos y experiencias, nos unimos bajo la bandera de la curiosidad y el deseo de aprender.
                            </p>
                        </div>
                        <WhatsappButton className="translate-x-3/4 translate-y-1/2 "/>
                    </div>
                    <div className="mt-12 md:mt-0 justify-center">
                        <Image src="/logos/logonew.svg" 
                            className=" p-0 g-image" 
                            height={300} 
                            width={300} 
                            alt=""
                        />
                    </div>
                </div>	
            </section>
        </VibringContainer>
    )
}