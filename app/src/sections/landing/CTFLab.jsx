'use client'
import React from 'react'
import LabCTF from '@/components/ui/panels/LabCTF'
export default function CTFLab() {
  return (
    <div>
       <LabCTF
          label="Bienvenida a CTF!!!"
          flag="Bienvenido"
          process={(a,e) => {a == e}}
        >
          <h1>
            Bienvenido
          </h1>
        </LabCTF>
    </div>
  )
}
