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
    },
    {
      label: "Contactos",
      href: "#",
  }
]

export default function Footer() {
  return (
    <footer class="flex flex-col space-y-10 justify-center m-10">
      <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        {data.map(function(e,i){
          return (
                  <Link
                  key={i}
                    className="hover:text-gray-900"
                    href={e.href}
                  > 
                    {e.label} 
                  </Link>
          )
       })}
      </nav>

     
      <p class="text-center text-gray-700 font-medium">
        &copy; 2024 UNSA Ethical Hacker Association - All rights reservered.
      </p>
    </footer>
  );
}
