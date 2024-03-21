'use client'
import React from 'react'
import LabCTF from '@/components/ui/panels/LabCTF'
import { Button } from '@material-tailwind/react'
import { Fragment } from 'react'
export default function CTFLab({onLabOpen, onLabClose}) {
  return (
    <div className="gap-4 p-4 flex justify-center">
      <LabCTF
          label="Bienvenida a CTF!!!"
          flag=""
          onClick={onLabOpen}
          onClose={onLabClose}
      >
          {({flag}) => 
         <Fragment>
           <h1 className="text-semibold text-3xl">
             Bienvenido
           </h1>
           <p className="opacity-70">
             Formato de las FLAGS que vamos a usar ({flag})
            
           </p>
           
         </Fragment>
          }
      </LabCTF>
    </div>
  )
}
