import { Card } from '@/base-components/Card'
import MyImage from '@/resources/images/MyImage'
import Link from 'next/link'
import {FC} from 'react'

export interface CardProps {
  title: string,
  href: string,
  desc: string,
  type?: number,
  keyStrings?: string[],
}

export const ContentCard : FC<CardProps> = ({title, href, desc}) => {
  return (
    <Card addClass='border border-black p-2 rounded'>
      <Link
        href={href}
        className="flex flex-col gap-4 m-1"
      >
        <div>
          <MyImage imgName="logo-item"/>
        </div>
        <div className='text-center'>
          <h1 className="text-xl">
            {title}
          </h1>
          <p>
            {desc}
          </p>
        </div>
      </Link>
    </Card>
  )
}

