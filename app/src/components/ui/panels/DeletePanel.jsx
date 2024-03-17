import React from 'react'

export default function DeletePanel({onReject}) {
  function onDelete(){
    console.log("deleted")
  }

  return (
    <div>
        <p className="text-black">¿Estás seguro?</p>
        <div className="flex flex-wrap mt-10 justify-center">
            <div className="p-3">
                <button onClick={onDelete} className="bg-green-600 text-white">Sí</button>
            </div>

            <div className="p-3">
                <button onClick={onReject} className="bg-red-600 text-white">No</button>
            </div>
        </div>
    </div>
  )
}
