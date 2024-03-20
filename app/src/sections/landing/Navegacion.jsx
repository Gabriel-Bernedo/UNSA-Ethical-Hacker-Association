'use client'
import React from 'react'
import Image from 'next/image'
const navigation = [
    {
        label: "Home",
        href: "./#Home",
    },
    {
        label: "Nosotros",
        href: "./#Nosotros",
        className: "sm:none"
    },
    {
        label: "Informacion",
        href: "./#Informacion",
    },
    {
        label: "Conocimiento",
        href: "./#Conocimiento",
        className: "sm:none"
    },
    {
        label: "CTF",
        href: "./#CTF",
        className : "",
    }
]

export default function LandingPage(){
    return (
            <header className="flex flex-col items-center justify-between  md:max-w-full px-4 md:px-6 py-4 md:flex-row fixed top-0 z-50 w-full backdrop-blur bg-secondary-2 bg-opacity-30">
                <a href="/" className=" z-10 active">
                    <Image src="/logos/Logo UEHA-04.svg" className="w-24 p-0 g-image" height={40} width={40} alt="" priority/>
                </a>
                <nav>
                    <ul className="flex flex-row items-center px-6 py-4 gap-16 text-white bg-primary-3 rounded-lg">
                        {navigation.map(function(e,i){
                            return (
                                <li className={e.className} key={i}>
                                    <a href={e.href} target="_self">
                                        {e.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
    )
}