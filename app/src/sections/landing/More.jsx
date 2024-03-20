import React from 'react'
import Info from '@/sections/about/Info'

export default function LandingPage(){
    return (
        <main id="Informacion" className="overflow-hidden bg-slate-800 h-screen">
            <h1 className='text-5xl text-semibold text-center m-8'> MAS ACERCA DE NOSOTROS</h1>
            <Info />            
        </main>
    )
}