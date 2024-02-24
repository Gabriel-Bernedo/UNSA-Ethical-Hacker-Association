import React from "react";

export default function Footer() {
  return (
    <footer class="flex flex-col space-y-10 justify-center m-10">
      <nav class="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a class="hover:text-gray-900" href="#">
          Home
        </a>
        <a class="hover:text-gray-900" href="#">
          Nosotros
        </a>
        <a class="hover:text-gray-900" href="#">
          Noticias
        </a>
        <a class="hover:text-gray-900" href="#">
          Recursos
        </a>
        <a class="hover:text-gray-900" href="#">
          Contacto
        </a>
      </nav>

     
      <p class="text-center text-gray-700 font-medium">
        &copy; 2024 UNSA Ethical Hacker Association - All rights reservered.
      </p>
    </footer>
  );
}
