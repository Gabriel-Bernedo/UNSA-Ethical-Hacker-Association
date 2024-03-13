import React from "react";

export default function page() {
    // Login
    return (
        <main class="w-full h-screen grid grid-cols-2">
            <div class="lg:p-36 md:p-52 sm:20 p-8 w-full">
                <img class="w-40 mx-auto mb-5" src="/file.png" />
                <h2 class="block mb-5 text-indigo-500 text-center font-bold uppercase text-2xl pb-1">UNSA Ethical Hacker Association</h2>
                <form action="/resources" method="get">
                {/* <!-- Usuario--> */}
                    <div class="mb-4">
                        <label class="block mb-2 text-indigo-500" for="username">Usuario</label>
                        <input class="w-full p-2 mb-6 text-indigo-700 border-b-4 outline-none focus:bg-gray-300 shadow-sm ring-1 ring-inset ring-indigo-800" type="text" name="username" placeholder="Usuario" />
                    </div>
                {/* <!-- Contraseña --> */}
                    <div class="mb-4">
                        <label class="block mb-2 text-indigo-500" for="password">Contraseña</label>
                        <input class="w-full p-2 mb-6 text-indigo-700 border-b-4 outline-none focus:bg-gray-300 shadow-sm ring-1 ring-inset ring-indigo-800" type="password" name="password" placeholder="Contraseña" />
                    </div>
                {/* <!-- Boton Login --> */}
                    <input class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" value="Iniciar Sesiòn" /> 
		        </form>
		    </div>
            <div class="h-[895px] bg-anime-cover-3 bg-cover">
                {/*<img src="/img.webp" alt="Placeholder Image" class="object-cover w-full h-[895px]"/>*/}
            </div>
            {/* <!-- Login --> */}
    </main>
    )
  }
  