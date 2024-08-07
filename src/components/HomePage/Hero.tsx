"use client"

import { bgHome, oswald } from "@/assets"
import { motion, useTransform, useScroll, MotionValue } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export const Hero = () => {

    const title = "Welcome"
    const containerRef = useRef(null)
    const [yValues, setYValues] = useState<MotionValue<number>[]>([])

    useEffect(() => {
        const { scrollYProgress } = useScroll({
            target: containerRef,
            offset: ['end center', 'end end']
        })

        const yValuesArray = title.split("").map((_, i) => 
            useTransform(scrollYProgress, [0, 1], [-200 * (i + 1), 0])
        )
        setYValues(yValuesArray)
    }, [title])

    return (
        <section ref={containerRef} className="relative min-h-screen w-full center justify-center px-px before:bg-[#0000007c] before:inset-0 before:z-10 before:absolute">
            <video
                src={bgHome}
                autoPlay
                muted
                controls={false}
                playsInline
                className="absolute object-cover inset-0 w-full h-full"
            />

            <div className="center min-h-[30rem] relative z-10">
                {title.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: .5 }}
                        className={`${oswald.className} text-center  relative text-white z-10 font-bold cursor-pointer big-text`}
                        style={{ y: yValues[index] }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
        </section>
    )
}
