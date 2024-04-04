import React, { FC, Fragment } from 'react'
import Navigation from '@/static-components/navs/Navigation'
import Top from '@/sections/index/Top'
import Hero from '@/sections/index/Hero'

import MyBar from '@/static-components/bars/MyBar'

import { PageProps } from '@/types/page'
import MyImage from '@/resources/images/MyImage'
import { home } from '@/data/manager'

const nav = [
  {
    label : "About",
    href : "/"
  }
]

export const Home: FC<PageProps> = () => {
  return (
    <Fragment>
      <Navigation nav={nav} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Top/>
        <Hero 
          data={home.intro.desc} 
          hero={<MyImage imgName="logo"/>}
          />
        <MyBar data={home.nav} type="details"/>
      </main>
    </Fragment>
  )
}
