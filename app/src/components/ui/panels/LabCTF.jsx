
'use client'
import React, {useRef} from 'react'
import MyPopup from '../Popups/MyPopup'
import { Button } from '@material-tailwind/react'
const LabCTFClassName = ""
export default function LabCTF({label, children, flag, process}) {
  const res = useRef(null)

  function verifyFlag(){
    const value = res.current.value
    if(process(value, flag)){
      alert("Reto Cumplido")
    } else {
      alert("FLAG Incorrecta")
    }
  }

  return (
    <MyPopup
      trigger={
        <Button className={LabCTFClassName}>
          {label}
        </Button>
      }
    >
      {() => 
        <section>
          <div>
            {children}
          </div>
          <div className='flex gap-4 p-2'>
            <input type="text" ref={res} className='text-black'/>
            <Button onClick={verifyFlag}>Ingrese Clave</Button>
          </div>
        </section>
      }
    </MyPopup>
  )
}
