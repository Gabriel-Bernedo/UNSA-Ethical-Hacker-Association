import React from "react";

export default function Nabvar() {
    return (
        <header class="flex flex-col items-center justify-between max-w-full md:max-w-6xl px-2 md:px-6 py-12 mx-auto md:flex-row">
            <a href="/" class="text-indigo-900 z-10 active">
                <img src="/file.png" alt="" class="w-24 py-8 md:py-0 g-image"/>
            </a>
            <nav class="z-10">
                <ul class="flex flex-row items-center px-10 py-6 text-indigo-100 bg-indigo-900 rounded-lg">
                    <li class="pr-8">
                        <a href="">Home</a>
                    </li>
                    <li class="pr-8">
                        <a href="">Nosotros</a>
                    </li>
                    <li class="pr-8">
                        <a href="">Noticias</a>
                    </li>
                    <li class="pr-8">
                        <a href="" >Recursos</a>
                    </li>
                    <li>
                        <a href="" >Contactos</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
