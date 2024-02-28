import React from 'react'
import PartnerMainLink from '../links/PartnerMainLink'

const location = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
}

export default function PartnerMainContainer({href, label, imgName, side}) {
  return (
    <div className={location[side] + `fixed flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"`}>
      <PartnerMainLink href={href} label={label} imgName={imgName}/>      
    </div>
  )
}
