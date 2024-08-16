"use client"
import Image from 'next/image'
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import { useTranslations } from 'next-intl'
import { LinesConect } from '../svg/LinesConect'
import { firebase, framerMotion, javascript, next, react, typescript } from '@/assets'
import { FloatingIcon } from './FloatingIcon'


export const Hero = () => {
    const t = useTranslations("Projects")
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end 95%", "end start"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, -200])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, 200])

    const text = {
        fontSize: "clamp(4rem, 9vw, 10vw)",
        lineHeight: "clamp(5rem, 10vw, 10vw)"
    }


    return (
        <section ref={ref} className='min-h-screen w-full px-px center flex-col pt-32 pb-10 overflow-hidden relative'>
            <Image src={"/projects/bg.png"} alt='' fill className='object-cover' priority />
            <div className='flex justify-end items-center flex-col flex-1 font-bold relative' style={text}>

                <motion.div style={{ x }} className='text-white'>
                    <motion.span>{t("title2")}</motion.span>
                </motion.div>
                <motion.div style={{ x: x2 }} className='text-white'>
                    <motion.span>{t("title3")}</motion.span>
                </motion.div>
                <div className='text-primary-color'>
                    <span className='text-stroke-red text-black'>{t("title1")}</span>
                </div>
                <LinesConect ref={ref} />
            </div>
            <FloatingIcon className='absolute left-[5%] md:top-[15%] md:left-[30%]' img={typescript}/>
            <FloatingIcon className='absolute md:top-[41%]' img={next}/>
            <FloatingIcon className='absolute md:left-[20%]' img={framerMotion}/>
            <FloatingIcon className='absolute md:right-[30%]' img={javascript}/>
            <FloatingIcon className='absolute left-[40%] md:bottom-[30%]' img={firebase}/>
            <FloatingIcon className='absolute md:top-[15%] md:right-[30%]' img={react}/>
        </section>
    )
}
