"use client"

import { useEffect, useRef } from 'react'
import { smothScroll } from '@/utils/smothScroll'
import { ContainerExperience } from './ContainerExperience'
import { useTranslations } from 'next-intl'

const Page = () => {

  const ref = useRef(null)
  const t = useTranslations("Experiences")

  useEffect(() => {
    smothScroll()
  }, [])

  const experiences = [
    {
      title: t("dev.title"),
      description: t("dev.description"),
      date: t("dev.date")
    },
    {
      title: t("manager.title"),
      description: t("manager.description"),
      date: t("manager.date"),
      company: t("manager.company")
    },
    {
      title: t("bookingAgent.title"),
      description: t("bookingAgent.description"),
      date: t("bookingAgent.date"),
      company: t("bookingAgent.company")
    },

  ]

  return (

    <section ref={ref} className='center w-full py-32 flex-col min-h-screen bg-black px-px text-white'>
      <div className='flex flex-col gap-5'>
        <h1 className='font-bold text-5xl'>{t("title")}</h1>
        <p className='max-w-[40rem] text-center text-lg'>{t("description")}</p>
      </div>
      <div className='relative center flex-wrap gap-5 py-10 '>

        {experiences.map((el, index) => (
          <ContainerExperience company={el.company || ""} key={index} title={el.title} date={el.date} description={el.description} />
        ))}
      </div>
    </section>
  )
}

export default Page