import React from 'react'
import Popup from 'reactjs-popup'
export default function MyPopup({children, title, trigger}) {
  let Children = children
  return (
    <Popup
      trigger={trigger}
      modal
    >
      {close => {
        return (
          <div className="bg-blue-800">
            <button className="cursor-pointer absolute block py-[2px] px-[5px] leading-5 -right-[10px] -top-[10px] font-[24px] bg-black border-radius-[18px] border-[1px] border-solid border-black" onClick={close}>
              &times;
            </button>
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
