import React, {Fragment} from 'react'
import Navegacion from '@/sections/landing/Navegacion'
import animations from '@midudev/tailwind-animations'

export default function LandingPage(){
    return (
        <Fragment>
            <Navegacion />
            <main className="">
                <div className="container mx-auto px-8 lg:flex">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className= "text-4xl lg:text-5xl xl:text-6xl font-bold leading-nones animate-blurred-fade-in">Bienvenido a UNSA Ethical Hacking - UEHA</h1>
                            <p className="text-xl lg:text-2xl mt-6 font-light animate-blurred-fade-in">"Lo que creemos que ya sabemos es a menudo lo que previene que aprendamos"</p>
                            
                        </div>
                        <div className="md:w-1/2">
                            <img src="/fondo.jpg" alt="Hack"
                                className="rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}