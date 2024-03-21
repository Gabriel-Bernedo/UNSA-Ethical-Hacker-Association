'use client'
import React from 'react'
import CountDown from '@/components/ui/counters/CountDown'
import CTFLab from './CTFLab'
import { Fragment, useState } from 'react'
import CTFlabo from './CTFlabo'
import LabCTF from '@/components/ui/panels/LabCTF'


const PadDefault = ({onStart, onClose}) => {
  const button = (
    <LabCTF
      label="Empieza el Reto !!!"
      flag="Bienvenido"
      onClick={onStart}
      onClose={onClose}
    >
    {({flag}) => 
    <Fragment>
      <CTFlabo flag={flag}/>
    </Fragment>
    } 
  </LabCTF>
  )
  return (
    <Fragment>
      <h1 className="font-semibold text-3xl">
        Participa en nuestra CTF !!!
      </h1>
      <p>
        Hemos organizado nuestra propia CTF , participa mientras puedas !!!
      </p>
      <CountDown />
      <div className="text-center text-lg">
        {button}
      </div>
    </Fragment>
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
    <div id="CTF" className="flex flex-col h-screen">
      <h1 className="text-5xl text-semibold text-center m-8">
        Actividades: 
      </h1>
      <div className="grid grid-cols-2 gap-16">
        <section className='p-12'>
          <div className=" p-2">
            <h1 className="font-semibold text-5xl"> Capture the Flag (CTF) </h1>
            Que mejor forma que aprender que practicando: <br /> 
            Descubre y explota vulnerabilidades de sistemas bajo la modalidad de FLAGS (datos que representan informacion privada)
          </div>
          <div className="my-4 bg-secondary-2 rounded-lg p-4">
            <div className='text-center'>
              <h1 className='text-lg font-bold'>
                UEHA - CTF - LAB
              </h1>
              <p>
                ¿ No te ves lo suficientemente preparado ? <br />
                Pues aqui algunos pequeños ejercicios para que practiques
              </p>
            </div>
            <CTFLab 
              onLabOpen={handleLabOpen}
              onLabClose={handleLabClose}
            />
            <div>
              <p>&quot;Hermosos Bosques Embellecen Paisajes, Siempre Persiste, Vuela&quot; - Kintsugi Y.</p>
              {/* <script>
                {
                `/* Pues me encontraste, felicidades, 
                ¿estas esperando algo a cambio?, 
                tendras que esforzarte mejor
                `}
              </script> */}
            </div>

          </div>
        </section>
        <div className='rounded-lg bg-primary-1 center p-8 m-8 h-min-full text-white'>
          {padContent}
        </div>
      </div>
    </div>
  )
}
