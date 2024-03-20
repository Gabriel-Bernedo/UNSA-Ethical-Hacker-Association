'use client'
import React, {useRef, useEffect} from 'react'
import MyImage from '@/components/images/MyImage'
import Image from 'next/image'
const defaultContainerClassName = "flex flex-col items-center justify-center"
const defaultFullContainerClassName = ""
const defaultTimeClassName = "text-5xl"
const defaultDateClassName = "text-sm"
const timeStamp = 1711049400000

function useDate(){
  const [days, hours, minutes, seconds] = [useRef(null),useRef(null),useRef(null),useRef(null)]
  
  const SECOND = 1000,
    MINUTE = SECOND * 60,
    HOUR = MINUTE * 60,
    DAY = HOUR * 24

  function formatTime(time){
    return Math.floor(time).toString().padStart(2,"0")
  }

  function updateDate(date){
    if(days.current){
      days.current.innerText = formatTime(date/ DAY)
    }
    if(hours.current){
      hours.current.innerText = formatTime((date % DAY)/ HOUR)
    }
    if(minutes.current){
      minutes.current.innerText = formatTime((date % HOUR) / MINUTE)
    }
    if(seconds.current){
      seconds.current.innerText = formatTime((date % MINUTE) / SECOND)
    }
  }

  return {days, hours, minutes, seconds, updateDate,
    DAY, HOUR, MINUTE, SECOND}
}

function useCountDown({timeStamp}){
  const {days, hours, minutes, seconds, updateDate, SECOND} = useDate()
  const date = new Date(+timeStamp).getTime()

  function updateCountdown(){
    const now = Date.now()
    const diff = date - now
    updateDate(diff)
  }

  setInterval(updateCountdown, SECOND)
  updateCountdown()
  return {days, hours, minutes, seconds}
}

export default function CountDown({timeClassName, dateClassName, containerClassName, fullContainerClassName}) {
  const {days, hours, minutes, seconds} = useCountDown({timeStamp})
  return (
    <section class="my-4 flex flex-col gap-y-10 justify-center items-center">
      <Image src="/logos/Logo UEHA-04.svg" className="p-0 g-image" height={200} width={200} />
      <div className={fullContainerClassName || "flex gap-5"} data-date>
        <div className={defaultContainerClassName} data-days>
          <span ref={days} className={defaultTimeClassName}>00</span>
          <span className={defaultDateClassName}>Dias</span>
        </div>
        <div className={defaultContainerClassName} data-hours>
          <span ref={hours} className={defaultTimeClassName}>00</span>
          <span className={defaultDateClassName}>Horas</span>
        </div>
        <div className={defaultContainerClassName} data-minutes>
          <span ref={minutes} className={defaultTimeClassName}>00</span>
          <span className={defaultDateClassName}>Minutos</span>
        </div>
        <div className={defaultContainerClassName} data-seconds>
          <span ref={seconds} className={defaultTimeClassName}>00</span>
          <span className={defaultDateClassName}>Segundos</span>
        </div>
      </div>
    </section>
  )
}
