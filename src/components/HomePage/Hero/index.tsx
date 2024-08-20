"use client"

import { bgDots, bgHome } from "@/assets"
import { motion, useTransform } from "framer-motion"
import { useScroll } from "framer-motion"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { Marquee } from "./Marquee"


export const Hero = () => {

    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end 40%"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -200])


    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch((error) => {
                console.error("Erro ao tentar reproduzir o vídeo:", error);
            });
        }

    }, []);

    return (
        <section ref={containerRef} className="bg-black relative top-0 w-full  origin-center overflow-hidden">
            <Image src={bgDots} alt="BG" fill className="object-cover opacity-20" />
            <motion.div style={{ y }}>
                <div

                    className="top-0 min-h-screen w-full center font-bold">

                    <div className="absolute center text-white" >
                        <Marquee />
                        <Marquee />
                        <Marquee />
                        <Marquee />
                    </div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, delay: 1, ease: 'easeInOut' }}
                        className="size-[55vw] overflow-hidden sm:size-[30vw] center relative rounded-full ">
                        <video
                            ref={videoRef}
                            src={bgHome}
                            muted
                            autoPlay
                            playsInline
                            loop
                            controls={false}
                            className="absolute object-cover inset-0 w-full h-full"
                        />
                        <div className="relative center z-[500] text-black">
                            <Marquee />
                            <Marquee />
                            <Marquee />
                            <Marquee />
                        </div >
                    </motion.div>
                </div>
            </motion.div >
        </section>
    )
}
