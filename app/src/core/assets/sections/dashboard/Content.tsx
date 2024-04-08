import {FC} from 'react'

import { CardContainer } from '@/base-components/CardContainer'
import { ContentCard, CardProps } from './ContentCard'
import { ContainerProps } from '@/types/container'

export const ContentDisplay : FC<ContainerProps<CardProps>> = ({content, addClass}) => {
  const compClass = `m-2 rounded-lg bg-primary-1 h-fit ${addClass}`
  return (
    <CardContainer addClass={compClass}>
      {content.map((e,i) => (
        <ContentCard {...e} key={i}/>
      ))}
    </CardContainer>
  )
}
