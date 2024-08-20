"use client"
import React, { useEffect, useRef } from 'react'
import { smothScroll } from '@/utils/smothScroll'
import { MaxWidthContainer } from '@/components/MaxWidthContainer'
import { ContainerExperience } from './ContainerExperience'
import { useTranslations } from 'next-intl'

const Page = () => {
  const ref = useRef(null)
  const t = useTranslations("Experiences")

  useEffect(() => {
    smothScroll()
  }, [])

  const experiences = [
    {title: t("dev.title"), description:  t("dev.description"), date:  t("dev.date")},
    {title: t("manager.title"), description:  t("manager.description"), date:  t("manager.date")},
    {title: t("dev.title"), description:  t("dev.description"), date:  t("dev.date")},
    {title: t("dev.title"), description:  t("dev.description"), date:  t("dev.date")},
  ]
  return (
    <section ref={ref} className='center w-full py-32 flex-col min-h-screen bg-black px-px text-white gap-10'>
      <h1 className='font-bold text-5xl '>Experiência profissional</h1>
      <p className='max-w-[40rem] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, at, explicabo quae tempora velit ullam fugit earum, aperiam repellendus error sunt. Aliquid vel tempora minus.</p>
      <div className='relative center flex-wrap gap-5 py-10 '>

        {experiences.map((el, index)=> (
          <ContainerExperience key={index} title={el.title} date={el.date} description={el.description} />
        ))}
        <div className='h-[20rem]'></div>
      </div>
    </section>
  )
}

export default Page