import React from 'react'
import Input from '@/components/ui/forms/Input'

const InputClass = "w-full p-2 mb-6 mt-3 text-indigo-700 border-b-4 outline-none focus:bg-gray-300 shadow-sm ring-1 ring-inset ring-indigo-800"
const LabelClass = "block mb-2 text-indigo-500"

export default function Form() {
  return (
    <form action="/resources" method="get">
      {/* <!-- Usuario--> */}
        <div className="mb-4">
          <Input label="Usuario" className={LabelClass}>
            <input className={InputClass} type="text" name="username" placeholder="Usuario" />
          </Input>
        </div>
      {/* <!-- Contraseña --> */}
        <div className="mb-4">
          <Input label="Contraseña" className={LabelClass}>
            <input className={InputClass} type="password" name="password" placeholder="Contraseña" />
          </Input>
        </div>
      {/* <!-- Boton Login --> */}
          <input className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" value="Iniciar Sesiòn" /> 
    </form>
  )
}
