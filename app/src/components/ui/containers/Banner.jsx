import React, { Fragment } from 'react'
import UploadResource from '@/sections/resources/admin/UploadResource';

export default function page() {
    
    return (
        <Fragment>
        <div class="flex flex-wrap mt-10 justify-center z-50">
            <div class="m-3">
                <button class="bg-amber-500 text-white rounded-md px-4 py-2 hover:bg-amber-700 transition" onclick="">
                    Editar
                </button>
            </div>
            
            <div class="m-3">
                <button class="bg-rose-500 text-white rounded-md px-4 py-2 hover:bg-rose-700 transition">
                    Eliminar
                </button>
            </div>
        </div> 
        
        <div id="editar" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
            <div class="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
                <UploadResource/>
            </div>
        </div>
    </Fragment>
    )
  }