import React from 'react'
import CountDown from '@/components/ui/counters/CountDown'
export default function CTF() {
  return (
    <div className="flex flex-col justify-center items-center">
      <section className=" my-12">
        <h1 className="font-semibold text-5xl"> Capture the Flag (CTF) </h1>
        Some Description about CTF!!!! Some texts fits better here, so do nos attach them here
      </section>
      <div className='rounded-lg bg-indigo-500 my-12 w-fit center p-8'>
        <h1 className="font-semibold text-3xl">
          Participa en nuestra CTF !!!
        </h1>
        <p>
          Hemos organizado nuestra propia CTF, participa mientras puedas
        </p>
        <CountDown />
      </div>
      <section className="my-12">
        Some FLAGS HINTS
      </section>
    </div>
  )
}
