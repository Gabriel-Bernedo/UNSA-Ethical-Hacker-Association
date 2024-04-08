import React, { FC } from "react"
import { CardProps } from "@/types/card"

import { Div } from "./Component"

const cardClass = "m-4"

export const Card : FC<CardProps> = ({children, className, addClass}) => {
  className = cardClass
  return ( 
    <Div className={className} addClass={addClass}>
      {children}
    </Div>
  )
}