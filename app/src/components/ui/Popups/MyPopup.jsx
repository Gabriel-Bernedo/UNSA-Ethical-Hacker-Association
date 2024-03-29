import React from 'react'
import Popup from 'reactjs-popup'
export default function MyPopup({children, title, trigger, className}) {
  let Children = children
  return (
    <Popup
      trigger={trigger}
      modal
    >
      {close => {
        return (
          <div className={className || "bg-blue-700 bg-opacity-50 backdrop-blur border-double border-4 border-sky-500 p-2" }>
            
            <div className="flex justify-end p-2">
              <button  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" onClick={close}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd">
                  </path>
                </svg>
              </button>
            </div>
            
            { title && 
              <div className="w-full border-bottom-[1px] border-gray-700 border-solid"> 
                {title} 
              </div>
            }
            <Children close={close}/>
          </div>
        )
      }}
    </Popup>
  )
}
