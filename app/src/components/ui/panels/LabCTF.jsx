
'use client'
import React, {Fragment, useRef, useState} from 'react'
import MyPopup from '../Popups/MyPopup'
import { Button, Input } from '@material-tailwind/react'
import {createId} from '@paralleldrive/cuid2'
const LabCTFClassName = ""
export default function LabCTF({label, children: Children, onClick, onClose, flag: iFlag, onSuccess: success, onFailure: failure}) {
  const flag = `SECRET_{${iFlag || createId()}}` 
  const onSuccess = success || function() {
    alert("Felicidades, encontraste el FLAG")
    onClose()
  }
  const onFailure = failure || function(){
    alert("Lo siento, el input ingresado no es el FLAG")
  }

  const Content = () => {
    const [input, setRes] = useState('')
    
    function handleOnChange({target}){
      return setRes(target.value)
    }

    function handleResponse(){
      if(input == flag){
        onSuccess({input})
      } else {
        onFailure({input})
      }
    }
    
    return (
      <div className="flex flex-col justify-between h-full relative">
        <button  className="text-gray-400 bg-black
          hover:bg-gray-200 hover:text-gray-900 
          rounded-lg text-sm p-1.5 ml-auto inline-flex items-center
          absolute -right-3 -top-3
          " 
          onClick={onClose}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd">
            </path>
          </svg>
        </button>
        <div className="bg-primary-3 rounded-lg p-4 mb-4">
          <Children flag={flag}/>
        </div>
        <div className="bg-secondary-2 rounded-lg p-4 relative justify-around ">
          <Input 
            color='white'
            type="text"
            label="FLAG"
            value={input}
            onChange={handleOnChange} 
            className='pr-20'
            containerProps={{
              className: "min-w-0"
            }}
          />
          <Button
            size="sm"
            className="!absolute right-5 top-5 rounded"
            onClick={handleResponse}
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
