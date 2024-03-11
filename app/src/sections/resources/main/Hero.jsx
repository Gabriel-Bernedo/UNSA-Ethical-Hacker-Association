import React from 'react'
import MyImageBanner from '@/components/ui/banners/MyImageBanner'
export default function Hero() {
  return (
    <MyImageBanner bgCover="bg-anime-cover" bgPosition="bg-center">
      <h1 class="text-4xl font-bold">UNSA Ethical Hackers Association (UEHA)</h1>
      <p class="text-xl mt-4 font-semibold">¿Que deseas aprender hoy?</p>
    </MyImageBanner>
  )
}
