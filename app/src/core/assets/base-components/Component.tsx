import { ComponentProps } from "@/types/component";
import { FC } from "react";

export const Div : FC<ComponentProps> = ({children, className, addClass}) => {
  const compClass = `${className} ${addClass}`
  return (
    <div className={compClass}>
      {children}
    </div>
  )
}