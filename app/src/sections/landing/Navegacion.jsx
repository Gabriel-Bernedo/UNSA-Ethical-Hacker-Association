import React from 'react'

export default function LandingPage(){
    return (
        <main className="overflow-hidden bg-slate-800 p-2">
            <header class="flex flex-col items-center justify-between max-w-full md:max-w-6xl px-2 md:px-6 py-12 mx-auto md:flex-row">
                <a href="/" class="text-indigo-900 z-10 active">
                    <img src="/file.png" class="w-24 py-8 md:py-0 g-image" />
                </a>
                <nav class="z-10">
                    <ul class="flex flex-row items-center px-6 py-4 text-indigo-100 bg-indigo-900 rounded-lg">
                        <li class="pr-8">
                            <a href="/">Home</a>
                        </li>
                        <li class="pr-8">
                            <a href="./#Nosotros" >Nosotros</a>
                        </li>
                        <li class="pr-8">
                            <a href="./#Informacion" >Información</a>
                        </li>
                        <li class="pr-8">
                            <a href="./#Conocimiento" class="ml-2">Conocimiento</a>
                        </li>
                        <li class="pr-8">
                            <a href="#" class="ml-2">Reto</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </main>
    )
}