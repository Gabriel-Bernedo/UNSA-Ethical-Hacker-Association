'use client'
import { useEffect, useState } from 'react';
import { useRef } from 'react';

export default function page() {
    const formJ = useRef("")
    const form = formJ.current;
    
    function SubmitHandler(formS) {
            // Prevenir el comportamiento predeterminado de envío del formulario
            formS.preventDefault();
            
            // Obtener los valores de los campos del formulario
            const name = document.getElementById('name').value;
            const tipo = document.getElementById('tipo').value;
            const enlace = document.getElementById('enlace').value;
            const desc = document.getElementById('desc').value;
            const img = document.getElementById('img').value;
    
            const formData = {
                "Recursos": [
                    {
                        "name": name,
                        "tipo": tipo,
                        "enlace": enlace,
                        "desc": desc,
                        "img": img
                    }
                ]
            };

            // Obtener datos anteriores si existen en localStorage
            let storedData = localStorage.getItem('datosS');
            if (storedData) {
                storedData = JSON.parse(storedData);
                storedData.Recursos.push(formData.Recursos[0]);
            } else {
                storedData = formData;
            }
        
            // //Guardar en localstorage
            localStorage.setItem('datosS', JSON.stringify(storedData));
            //Imprimir el JSON en la consola
            console.log(storedData);

            // Limpiar los campos del formulario
            document.getElementById('name').value = "";
            document.getElementById('tipo').value = "";
            document.getElementById('enlace').value = "";
            document.getElementById('desc').value = "";
            document.getElementById('img').value = "";
    }

    window.onload = function() {
        let storedData = localStorage.getItem('datosS');
        if (storedData) {
            storedData = JSON.parse(storedData);
            const firstResource = storedData.Recursos[0]; //Si solo quieres mostrar el primer recurso guardado
            document.getElementById('name').value = firstResource.name || '';
            document.getElementById('tipo').value = firstResource.tipo || '';
            document.getElementById('enlace').value = firstResource.enlace || '';
            document.getElementById('desc').value = firstResource.desc || '';
            document.getElementById('img').value = firstResource.img || '';
        }
    };
    
    return (
    <main class="w-full">
        <div class="bg-gray-100 flex justify-center items-center h-screen">
        <div class="w-1/2 h-screen hidden lg:block">
			<img src="/img.webp" alt="Placeholder Image" class="object-cover w-full h-[895px]"/>
		</div>
			{/* <!-- Login --> */}
		<div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 bg-black">
			<img class="w-20 mx-auto mb-5" src="/file.png" />
			<h2 class="block mb-2 text-indigo-500 text-center font-bold uppercase text-2xl pb-1">Subir Recursos</h2>
            <div class="flex items-center justify-center p-12">
            <div class="mx-auto w-full max-w-[950px] bg-transparent">   
                <form className="p-2" ref={formJ} onSubmit={SubmitHandler}>
                    <div class="mb-5">
                        <label for="name" class="mb-3 block text-base font-bold text-indigo-400">Nombre Recurso</label>
                        <input type="text" name="name" id="name" placeholder="Nombre Recurso"
                            class="w-full rounded-md border-2 border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"  />
                    </div>

                    <div class="mb-5">
                        <label for="tipo" class="mb-3 block text-base font-bold text-indigo-400">Tipo Recurso</label>
                        <select name="tipo" id="tipo" class="w-full rounded-md border-2 border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#f8f8f8] outline-none focus:border-[#6A64F1] focus:shadow-md"   >
                            <option value="0" class="text-base font-medium text-[#6B7280]" defaultValue>Selecciona un tipo</option>
                            <option value="1">Herramientas</option>
                            <option value="2">Material</option>
                            <option value="3">Curso</option>
                        </select>
                    </div>

                    <div class="mb-5">
                        <label for="enlace" class="mb-3 block text-base font-bold text-indigo-400">Enlace</label>
                        <input type="text" name="enlace" id="enlace" placeholder="Ingrese enlace recurso"
                            class="w-full rounded-md border-2 border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"  />
                    </div>

                    <div class="mb-5">
                        <label for="desc" class="mb-3 block text-base font-bold text-indigo-400">Descripcion</label>
                        <input type="text" name="desc" id="desc" placeholder="Descripcion" class="w-full rounded-md border-2 border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>

                    <div class="mb-5">
                        <label for="img" class="mb-3 block text-base font-bold text-indigo-400">Imagen</label>
                        <input type="text" name="img" id="img" placeholder="Enlace imagen" class="w-full rounded-md border-2 border-[#e0e0e0] bg-black py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                    </div>

                    <div>
                        <button class="hover:shadow-form w-full rounded-md bg-[#312aaa] py-3 px-8 text-center text-base font-semibold text-white outline-none" type="submit">Agregar</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
    </main>
    )
};