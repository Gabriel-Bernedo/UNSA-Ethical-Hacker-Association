'use client'
import { FC } from 'react'

interface DashboardProps<T> {
  data? : T[]
}

import { ContentDisplay } from './Content'
import { Filter } from './Filter'
import { useFilter } from '@/hooks/useFilter'
import { filterSetUp } from '@/hooks/useFilter'

export const ListDashboard : FC<DashboardProps<any>> = ({data}) => {
  const filterOptions = useFilter({setUp: filterSetUp.news})
  
  return (
    <div className="flex h-full p-8 pt-[92px]">
      <Filter 
        addClass="hidden md:flex md:flex-col lg:basis-1/4 basis-2/5 justify-center gap-4 items-center" 
        label="Noticias"
        filterOptions={filterOptions}
      />
      <ContentDisplay content={data} addClass="lg:basis-3/4 md:basis-3/5"/>
    </div>
  )
}
