import React, {Fragment} from 'react'
import animations from '@midudev/tailwind-animations'
import VibringContainer from '@/components/ui/containers/VibringContainer'
export default function LandingPage(){
    return (
        <div className="flex flex-col md:flex-row  w-full
            items-center justify-center h-screen bg-wallpaper-1 bg-cover"
            id="Home"
        >
            <div className="w-1/2 mb-8 md:mb-0 backdrop-blur p-8 rounded-md text-center translate-y-4">
                <h1 className= "text-4xl lg:text-5xl xl:text-6xl font-bold leading-nones animate-blurred-fade-in">Bienvenido a UNSA Ethical Hacking - UEHA</h1>
                <p className="text-xl lg:text-2xl mt-6 font-light animate-blurred-fade-in">&quot; Lo que creemos que ya sabemos es a menudo lo que previene que aprendamos &quot;</p>
            </div>
            {/* <div className="md:w-1/2">
                <img src="/fondo.webp" alt="Hack"
                    className="rounded-lg shadow-lg" />
            </div> */}
        </div>
    )
}