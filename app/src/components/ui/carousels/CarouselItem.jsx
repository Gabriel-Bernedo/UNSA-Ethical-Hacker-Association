import React from 'react'

export default function CarouselItem({item}) {
  return (
    <div>
      <h3>{item.title}</h3>
      <div>{item.body}</div>
    </div>
  )
}
