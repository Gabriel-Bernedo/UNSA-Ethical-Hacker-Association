'use client'
import React, {useRef, useEffect} from 'react'
import MyImage from '@/components/images/MyImage'

const defaultContainerClassName = ""
const defaultFullContainerClassName = ""
const defaultTimeClassName = ""
const timeStamp = 1710979200000

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
      seconds.current.innerText = Math.floor((date % MINUTE) / SECOND)
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
  setInterval(updateCountdown(), SECOND)
  return {days, hours, minutes, seconds}
}

export default function CountDown({timeClassName, dateClassName, containerClassName, fullContainerClassName}) {
  const {days, hours, minutes, seconds} = useCountDown({timeStamp})
  return (
    <section class="my-32 flex flex-col gap-y-10 justify-center items-center">
      <MyImage imgName="logo"/>
      <div className={fullContainerClassName || "flex gap-5"} data-date>
        <div className={containerClassName} data-days>
          <span ref={days}>00</span>
          <span>Dias</span>
        </div>
        <div className={containerClassName} data-hours>
          <span ref={hours}>00</span>
          <span>Horas</span>
        </div>
        <div className={containerClassName} data-minutes>
          <span ref={minutes}>00</span>
          <span>Minutos</span>
        </div>
        <div className={containerClassName} data-seconds>
          <span ref={seconds}>00</span>
          <span>Segundos</span>
        </div>
      </div>
    </section>
  )
}
