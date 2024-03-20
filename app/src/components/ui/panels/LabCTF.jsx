
'use client'
import React, {Fragment, useRef, useState} from 'react'
import MyPopup from '../Popups/MyPopup'
import { Button, Input } from '@material-tailwind/react'
import cuid2 from '@paralleldrive/cuid2'
const LabCTFClassName = ""
export default function LabCTF({label, children, onClick, flag: iFlag}) {
  const flag = `SECRET_{${iFlag || 'xd'}}`
 

  const Content = () => {
    const [res, setRes] = useState('')
    
    function handleOnChange({target}){
      return setRes(target.value)
    }

    return (
      <div className="flex flex-col justify-between h-full">
        <div className="bg-primary-3 rounded-lg p-4">
          {children}
        </div>
        <div className="bg-secondary-2 rounded-lg p-4 relative justify-around ">
          <Input 
            color='white'
            type="text"
            label="FLAG"
            value={res}
            onChange={handleOnChange} 
            className='pr-20'
            containerProps={{
              className: "min-w-0"
            }}
          />
          <Button
            size="sm"
            className="!absolute right-5 top-5 rounded"
          >
            ENVIAR
          </Button>
        </div>
      </div>
    )
  }

  return (
    <Button onClick={() => onClick(Content)}>
      {label}
    </Button>
  )
}
