import React from "react";
import AboutJoinButton from "@/components/ui/buttons/AboutJoinButton";
export default function Footer() {
    return (
        <footer className="flex flex-col space-y-10 justify-center m-10">
            <AboutJoinButton/>
            <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <a className="hover:text-gray-900" href="./#Home">Home</a>
                <a className="hover:text-gray-900" href="./#Nosotros">Nosotros</a>
                <a className="hover:text-gray-900" href="./#Informacion">Información</a>
                <a className="hover:text-gray-900" href="./#Conocimiento">Conocimiento</a>
                <a className="hover:text-gray-900" href="./#CTF">Reto</a>
            </nav>
            <p className="text-center text-gray-700 font-medium">&copy; 2024 UNSA Ethical Hacking - All rights reservered.</p>
        </footer>
    )
}