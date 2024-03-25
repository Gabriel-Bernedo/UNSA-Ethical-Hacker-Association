import React, {Fragment} from 'react'
import animations from '@midudev/tailwind-animations'
import VibringContainer from '@/components/ui/containers/VibringContainer'
export default function LandingPage(){
    return (
        <div className="flex w-full
            items-center justify-center h-dvh lg:bg-wallpaper-1 lg:bg-cover bg-center"
            id="Home"
        >
            <div className="m-8 lg:backdrop-blur 
            p-8 rounded-md text-center translate-y-4 drop-shadow-secondaryFullLight">
                <h1 className= "text-4xl lg:text-5xl xl:text-6xl font-bold leading-nones animate-blurred-fade-in">Bienvenido a UNSA Ethical Hacking - UEHA</h1>
                <p className="text-xl lg:text-2xl mt-6 font-light animate-blurred-fade-in">&quot; Lo que creemos que ya sabemos es a menudo lo que previene que aprendamos &quot;</p>
            </div>
        </div>
    )
}