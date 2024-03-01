import React from "react";
import Link from "next/link";

const data = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Nosotros",
        href: "/about",
    },
    {
        label: "Noticias",
        href: "/news",
    },
    {
        label: "Recursos",
        href: "/resources",
    }
]

export default function Nabvar() {
    return (
        <header class="z-50  flex flex-col items-center justify-between max-w-full md:max-w-4xl px-2 md:px-6 py-12 mx-auto md:flex-row top-0">
            <a href="/" class="text-indigo-900 z-10 active">
                <img src="/file.png" alt="" class="w-24 py-8 md:py-0 g-image drop-shadow-bitDark"/>
            </a>
            <nav class="z-10">
                <ul class="flex flex-row items-center px-10 py-6 text-indigo-100 bg-indigo-900 rounded-lg">
                    {data.map(function(e,i){
                        return (
                            <li class="pr-8" key={i}>
                                <Link
                                    href={e.href}
                                > 
                                    {e.label} 
                                </Link>
                            </li>
                        )
                    })}
                    <li>
                        <a href="" >Contactos</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
