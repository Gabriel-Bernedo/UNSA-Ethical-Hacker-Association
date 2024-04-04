'use client'
import React from 'react'

const icons = {
  "right-arrow": function({className}){
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" 
        className={className || "-mr-0.5 h-5 w-5"}
      >
        <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd"></path>
      </svg>
  },
}

export default function MyIcon({iconName,className}) {
  var Icon = icons[iconName]
  return <Icon className={className}/>
}
