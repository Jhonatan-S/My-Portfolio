"use client"
import Image from 'next/image'
import  { useRef, useState } from 'react'
import {  motion, useScroll, useTransform } from "framer-motion"
import { useTranslations } from 'next-intl'


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
            <div className='center flex-col flex-1 font-bold relative' style={text}>

                <motion.div style={{ x }} className='text-primary-color'>
                    <motion.span className='text-stroke-red text-black'>{t("title1")}</motion.span>
                </motion.div>
                <motion.div style={{ x: x2 }} className='text-white'>
                    <motion.span>{t("title2")}</motion.span>
                </motion.div>
                <motion.div style={{ x }} className='text-white'>
                    <motion.span>{t("title3")}</motion.span>
                </motion.div>
            </div>
        </section>
    )
}
