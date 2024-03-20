'use client'
import React from 'react'
import LabCTF from '@/components/ui/panels/LabCTF'
import { Button } from '@material-tailwind/react'
export default function CTFLab({onLabClick}) {
  return (
    <div>
      <LabCTF
          label="Bienvenida a CTF!!!"
          flag="Bienvenido"
          onClick={onLabClick}
          process={(a,e) => {a == e}}
      >
          <h1>
            Bienvenido
          </h1>
      </LabCTF>
    </div>
  )
}
