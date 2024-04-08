import React, { FC } from 'react'

import {BannerProps} from '@/types/banner'
import { Div } from './Component'

const bannerClass = "max-h-screen w-full overflow-y-auto"

export const Banner: FC<BannerProps> = ({children, addClass}) => {
  const className = `h-fit ${bannerClass}`
  return (
    <Div className={className} addClass={addClass}>
      {children}
    </Div>
  )
}

export const FullBanner: FC<BannerProps> = ({children, addClass}) => {
  const className = `h-screen ${bannerClass}`
  return (
    <Div className={className} addClass={addClass}>
      {children}
    </Div>
  )
}

// function MyBanner({children, bgCover, bgPosition}) {
//   return (
//     <div className={`relative h-96 w-full bg-cover ${bgCover} ${bgPosition}`}>
//       <div className="absolute inset-0 transition ease-in
//         backdrop-blur bg-black bg-opacity-50 hover:backdrop-blur-sm hover:bg-opacity-30
//         flex flex-col items-center justify-center
//         text-white
//         "
//       >
//         {children}
//       </div>
//     </div>
//   )
// }
