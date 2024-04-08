'use client'

import React from 'react'
import MyImage from '@/resources/images/MyImage';
import Input from '@/static-components/forms/Input';
import { useState, useRef } from 'react';

const InputClassName = "w-full bg-black py-3 px-6 my-1 " + 
  "rounded-md border-2 border-[#e0e0e0] " + 
  "text-base font-medium text-[#ffffff] outline-none " + 
  "focus:border-[#6A64F1] focus:shadow-md "


function useResource(){
  const [resource, rawSetResource] = useState({})

  function setResource({name, type, href, desc, img}){
    rawSetResource({name, type, href, desc, img})
    console.log(JSON.stringify(resource))
  }

  return {resource , setResource}
} // Activa el uso del objeto recurso

function useResourceAttr(){
  const {resource, setResource} = useResource(),
    name = useRef(null),
    type = useRef(null),
    href = useRef(null),
    desc = useRef(null),
    img = useRef(null)

  function setResourceAttr(){
    setResource({
      name: name.current.value,
      type: type.current?.value,
      href: href.current?.value,
      desc: desc.current?.value,
      img: img.current?.value,
    })
  }

  function cleanResourceAttr(){
    name.current.value = ""
    type.current.value = ""
    href.current.value = ""
    desc.current.value = ""
    img.current.value = ""
  }

  return { resource, name, type, href, desc, img, 
    setResourceAttr, cleanResourceAttr 
  }
} // Prepara el uso de los atributos de recurso

export default function UploadResource() {
  const {name, type, href, desc, img, 
    setResourceAttr, cleanResourceAttr} = useResourceAttr()  

  function SubmitHandler(formS) {
      // Prevenir el comportamiento predeterminado de envío del formulario
      formS.preventDefault();
      setResourceAttr()
      // //Guardar en localstorage

      // localStorage.setItem('datosS', JSON.stringify(storedData));
      // Imprimir el JSON en la consola
      // console.log(storedData);
      cleanResourceAttr()
  }

  return (
    <div class="p-6">
      <div className="flex items-center justify-between">
        <MyImage imgName="logo-item" />
        <h2 class="block text-indigo-500 text-center font-bold uppercase text-2xl">Subir Recursos</h2>
        <MyImage imgName="logo-item" />
      </div>
      <form className="p-2" onSubmit={SubmitHandler}>
        <Input label="Nombre Recurso">
          <input 
            ref={name}
            type="text" 
            placeholder="Nombre Recurso"
            class={InputClassName}  
          />
        </Input>

        <Input label="Tipo Recurso">
          <select 
            class={InputClassName}
            ref={type}
          >
            <option value="0" class="text-base font-medium text-[#6B7280]" defaultValue>Selecciona un tipo</option>
            <option value="1">Herramientas</option>
            <option value="2">Material</option>
            <option value="3">Curso</option>
          </select>
        </Input>

        <Input label="Enlace">
          <input 
            type="text" 
            ref={href} 
            placeholder="Ingrese enlace recurso"
            class={InputClassName}  
          />
        </Input>

        <Input label="Descripcion">
          <input 
            type="text" 
            ref={desc} 
            placeholder="Descripcion" 
            class={InputClassName} 
          />
        </Input>

        <Input label="Imagen"> 
          <input 
            type="text" 
            ref={img}
            placeholder="Enlace imagen" 
            class={InputClassName}
          />
        </Input>

        <div>
          <button class="hover:shadow-form w-full rounded-md bg-[#312aaa] py-3 px-8 text-center text-base font-semibold text-white outline-none" type="submit">Agregar</button>
        </div>
      </form>
    </div>
  )
}
