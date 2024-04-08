'use client' 
import { ComponentProps } from "@/types/component";
import { ChangeEventHandler } from "react";
import { useState } from "react";

export interface FilterProps extends ComponentProps{
  label? : string,
  filterOptions?: filterOptions,
}

export interface filterOptions {  
  title?: [string, ChangeEventHandler<HTMLInputElement>],
  type?: [number, ChangeEventHandler<HTMLSelectElement>],  
  keyOptions?: [string[], ChangeEventHandler<HTMLInputElement>],  
}

export enum filterSetUp{
  none,
  news,
  resources,
}

export function useFilter({setUp} : {setUp: filterSetUp}) : filterOptions{
  

  switch(setUp){
    case filterSetUp.none:
      return {}

    case filterSetUp.news:
      const [title, setTitle] = useState<string>()
      const handleTitle = (event) => {
        setTitle(event.target?.value)
      }
      return {title: [title, handleTitle]}
    case filterSetUp.resources:
      return {}

    default:
      return {}
  }
}