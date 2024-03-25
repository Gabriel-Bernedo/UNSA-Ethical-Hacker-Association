
import React from 'react'
import Image from 'next/image'
import NavButton from '@/components/ui/disclosures/NavButton'
const navigation = [
    {
        label: "Home",
        href: "./#Home",
    },
    {
        label: "Nosotros",
        href: "./#Nosotros",
    },
    {
        label: "Informacion",
        href: "./#Informacion",
    },
    {
        label: "Conocimiento",
        href: "./#Conocimiento",
    },
    {
        label: "CTF",
        href: "./#CTF",
    }
]
import MiniNav from '@/components/ui/navs/MiniNav'

export default function Navegacion(){
    return (
            <header className="flex items-center justify-end md:max-w-full px-4 md:px-6 py-4 md:flex-row fixed top-0 z-50 w-full backdrop-blur bg-secondary-2 bg-opacity-30">
                <a href="/" className="z-10 absolute top-1 left-5 ">
                    <Image src="/logos/logonew.svg" className="w-20 p-0 g-image" height={80} width={80} alt="" priority/>
                </a>
                <MiniNav nav={navigation}/>
                <NavButton nav={navigation} className="relative right-0 p-4 bg-primary-3 rounded-lg"/>
            </header>
    )
}