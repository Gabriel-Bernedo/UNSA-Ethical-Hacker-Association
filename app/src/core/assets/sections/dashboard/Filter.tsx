import { Banner } from '@/base-components/Banner'
import { FC } from 'react'

import { FilterProps } from '@/hooks/useFilter'

export const Filter : FC<FilterProps> = ({addClass, label, filterOptions}) => {
  const compClass = `m-2 rounded-lg bg-secondary-2 py-8 px-4 ${addClass}`
  if (filterOptions) {
    const {title, type, keyOptions} = filterOptions
    return (
      <Banner addClass={compClass}>
        <h1> {label} </h1>
        <div>
          {title ?
            <input type="text" placeholder='Filtrar por Palabras' value={title[0]} onChange={title[1]}/> 
            : "" 
          }
          {type ?
            <input type="text" placeholder='Filtrar por Tipo' value={title[0]} onChange={title[1]}/> 
            : "" 
          }
          {keyOptions ?
            <input type="text" placeholder='Filtrar por Palabras Clave' value={title[0]} onChange={title[1]}/> 
            : "" 
          }
        </div>
      </Banner>
    )
  } else {
    return (
      <Banner addClass={compClass}>
        <h1>{label}</h1>
      </Banner>
    )
  }
}
