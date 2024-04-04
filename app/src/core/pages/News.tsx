import React, { FC, Fragment } from 'react'
import { PageProps } from '@/types/page'
import Navigation from '@/static-components/navs/Navigation'

export const News : FC<PageProps> = () => {
  return (
    <Fragment>
      <Navigation />
      <div>
        Noticias
      </div>
    </Fragment>
  )
}
