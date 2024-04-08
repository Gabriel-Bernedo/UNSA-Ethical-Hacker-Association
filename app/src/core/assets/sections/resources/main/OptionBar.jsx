import React from 'react'
import MyBar from '@/components/ui/bars/MyBar'
import { resources } from '@/components/data/data'
export default function OptionBar() {
  return (
    <MyBar data={resources.nav} type="image" />
  )
}
