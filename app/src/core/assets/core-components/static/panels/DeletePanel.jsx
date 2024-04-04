import React from 'react'

export default function DeletePanel({onReject}) {
  function onDelete(){
    console.log("deleted")
  }

  return (
    <div className="">
        <p className="text-xl font-bold text-slate-950 mt-5 mb-6 text-center">¿Estás seguro de eliminar este elemento?</p>
            <svg class="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        <div className="flex flex-wrap mt-5 justify-center">
            <div className="p-3">
                <button onClick={onDelete} className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">Sí, estoy seguro</button>
            </div>
            
            <div className="p-3">
                <button onClick={onReject} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center">No, cancelar</button>
            </div>
        </div>
    </div>
  )
}
