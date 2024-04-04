'use client'
import React from 'react'
import CountDown from '@/dominio/components/ui/counters/CountDown'
import CTFLab from './CTFLab'
import { Fragment, useState } from 'react'
import CTFlabo from './CTFlabo'
import LabCTF from '@/dominio/components/ui/panels/LabCTF'
import { timeStamp } from '@/dominio/components/ui/counters/CountDown'

const PadDefault = ({onStart, onClose}) => {
  const [enabled, setEnabled] = useState(timeStamp > (new Date().getTime()))
  setInterval(()=>{
    setEnabled(timeStamp > (new Date().getTime()))  //timeStamp < (new Date().getTime())
  }, 1000)
  
  const button = (
      <LabCTF
        label="Empieza el Reto !!!"
        className="hidden lg:block"
        flag=""
        onClick={onStart}
        onClose={onClose}
        onSuccess={({input}) => {
          alert(`Felicidades: Encontraste tu FLAG\n Toma una captura y enviala por el grupo de wwp para declarate como el ganador definivo\n${input}`)
        }}
        onFailure={() => {
          alert("Lo sentimos, esa no es tu FLAG")
        }}
      >
      {({flag}) => 
      <Fragment>
        <CTFlabo flag={flag}/>
      </Fragment>
      } 
    </LabCTF>
  )

  return (
    <div className="flex flex-col justify-around h-full">
      <div className='text-center'>
        <h1 className="font-semibold text-3xl">
          Participa en nuestra CTF !!!
        </h1>
        <p className="hidden lg:block text-md/relaxed">
          Hemos organizado nuestra propia CTF , participa mientras puedas !!!
        </p>
      </div>
      <div className="flex-col items-center justify-around self-stretch hidden lg:flex">
        <CountDown />
        <div className="text-center text-lg">
          {enabled? button: "El reto ya termino, lo sentimos"}
        </div>
      </div>
      <div className="block lg:hidden text-center">
        Solo disponible desde LAPTOP o PC !!!
      </div>
    </div>
  )
}


export default function CTF() {

  const [padContent, setPadContent] = useState(<PadDefault onStart={handleLabOpen} onClose={handleLabClose}/>)

  function handleLabOpen(Content){
    setPadContent(<Content/>)
  }

  function handleLabClose(){
    setPadContent(<PadDefault onStart={handleLabOpen} onClose={handleLabClose}/>)
  }

  return (
    <div className='flex flex-col justify-evenly md:grid p-4 grid-cols-1 md:grid-cols-2 gap-4 mx-12 h-full'>
      <div className="p-2 
        lg:col-span-1 md:col-span-2">
        <h3 className="font-bold text-5xl"> Capture the Flag (CTF) </h3>
        <p className="text-md/relaxed mt-4">
          Que mejor forma que aprender que practicando: <br /> 
          Descubre y explota vulnerabilidades de sistemas bajo la modalidad de FLAGS (datos que representan informacion privada)
        </p>
      </div>
      <div className="m-4 bg-secondary-2 rounded-lg p-4 text-black
        lg:row-start-2 text-center hidden md:block">
        <div>
          <h3 className='text-3xl font-bold'>
            UEHA - CTF - LAB
          </h3>
          <p className='text-md/relaxed'>
            ¿ No te ves lo suficientemente preparado ? <br />
            Pues aqui algunos pequeños ejercicios para que practiques
          </p>
        </div>
        <div className="hidden lg:block">
          <CTFLab 
            onLabOpen={handleLabOpen}
            onLabClose={handleLabClose}
            className=""
          />
        </div>
        <div className="block lg:hidden my-8">
          <p className="text-lg font-semibold">
            Solo disponible desde LAPTOP o PC !!!
          </p>
        </div>
        <div className="text-lg/relaxed">
          <p>&quot;Hermosos Bosques Embellecen Paisajes, Siempre Persiste, Vuela&quot; - Kintsugi Y.</p>
        </div>

      </div>
      <div className='rounded-lg bg-primary-1 center m-4 p-8 h-min-full text-white
        lg:row-span-2'>
        {padContent}
      </div>
    </div>
  )
}
