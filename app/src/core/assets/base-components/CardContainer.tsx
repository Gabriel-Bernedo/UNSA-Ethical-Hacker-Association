import { FC } from "react";

import { CardProps } from "@/types/card";
import { ContainerProps } from "@/types/container";
import { Div } from "./Component";

const containerClass = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-h-svh overflow-y-auto"
export const CardContainer : FC<ContainerProps<CardProps>> = ({children, addClass}) => {
  const className = containerClass
  return (
    <Div className={className} addClass={addClass}>
      {children}
    </Div>
  )
}