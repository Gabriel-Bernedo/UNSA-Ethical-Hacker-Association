import React from 'react'
import Info from '@/dominio/sections/about/Info'

export default function More(){
    return (
        <main id="Informacion" className="flex flex-col justify-evenly overflow-hidden bg-slate-800 h-screen pb-16">
            <h1 className='text-5xl text-semibold text-center m-8'> MAS ACERCA DE NOSOTROS</h1>
            <Info />            
        </main>
    )
}