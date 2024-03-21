import React from 'react'
import MyIcon from '@/components/icons/MyIcon'
export default function AboutJoinButton() {
  return (
    <div className="mt-12 flex items-center justify-center gap-x-6">
      <button type="button" 
        className="text-md relative transition duration-100 
        inline-flex items-center gap-x-2 rounded-lg 
        bg-indigo-800 px-6 py-4 font-semibold text-white 
        hover:bg-teal-500 focus-visible:outline 
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 
        drop-shadow-bitLight hover:drop-shadow-dark"
      >
        Join Now
        <a href=""></a>
        <MyIcon iconName="right-arrow"/>
      </button>
    </div>
  )
}
