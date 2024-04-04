import React from 'react'

export default function OpenResource() {
  return (
    <div className="p-3">
      <button class="bg-amber-500 
        text-white rounded-md px-4 py-2 hover:bg-amber-700 transition" 
        onclick="openModal('modelConfirm')"
      >
          Editar
      </button>
    </div>
  )
}
