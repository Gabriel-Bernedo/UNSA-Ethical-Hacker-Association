import React, { FC, Fragment } from 'react'

import { PageProps } from '@/types/page'

import Navigation from '@/static-components/navs/Navigation'
import { ListDashboard } from '@/sections/dashboard/Dashboard'

import { newsContent as data } from '@/data/news'

export const News : FC<PageProps> = () => {
  return (
    <Fragment>
      <Navigation />
      <ListDashboard data={data}/>
    </Fragment>
  )
}
