'use client'

import React from 'react'
import Image from 'next/image'

const data = {
  "":{
    src: "/",
    alt: "La imagen no existe",
    width: 100,
    height: 100
  },
  "logo": {
    className: "relative dark:drop-shadow-bitLight dark:invert",
    src: "/file.png",
    alt: "UEHA",
    width: 180,
    height: 180
  },
  "logo-item" : {
    className: "relative dark:drop-shadow-bitDark",
    src: "/file.png",
    alt: "UEHA",
    width: 80,
    height: 80
  },
  "unsa": {
    src:"/unsa-logo.png",
    alt:"UNSA",
    width:100,
    height:24
  },
  "vercel": {
    src:"/vercel.svg",
    alt:"Vercel Logo",
    className:"invert",
    width:100,
    height:24
  },
}

export default function MyImage({imgName}) {
  return (
    <Image {...(data[imgName] || data[""])}
      priority
    />
  )
}
