'use client'

import React from 'react'
import DetailBarItem from './DetailBarItem'

const childTypes = {
  "details": DetailBarItem,
}

function renderChild(data, type, key){
  var Child = childTypes[type]
  return Child ? <Child data={data} key={key}/> : ""
}

export default function MyBar({data, type}) {
  return (
    <nav className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left z-10">
      {data.map(function(e,i){
        return renderChild(e, type, i)
      })}
    </nav>
  )
}
