"use client"

import { bgHome, oswald } from "@/assets"
import { motion, useTransform } from "framer-motion"
import { useScroll } from "framer-motion"
import { useEffect, useRef } from "react"
import { MaxWidthContainer } from "../MaxWidthContainer"
export const Hero = () => {

    const title = "Welcome"
    const containerRef = useRef(null)
    const videoRef = useRef<HTMLVideoElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['end center', 'end end']
    })

    const y = useTransform(scrollYProgress, [0, 1], [-200, 0])

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch((error) => {
                console.error("Erro ao tentar reproduzir o vídeo:", error);
            });
        }
    }, []);


    return (
        <section ref={containerRef} className="relative min-h-screen w-full center justify-center  before:bg-[#0000007c] before:inset-0 before:z-10 before:absolute">
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

            <MaxWidthContainer>
                <div className="center min-h-[30rem] relative z-10">

                    {title.split("").map((letter, index) => (

                        <motion.span

                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.3 }}
                            transition={{ duration: .5 }}
                            className={`${oswald.className} text-center  relative text-white z-10 font-bold cursor-pointer big-text`} style={{ y }}>
                            {letter}

                        </motion.span>
                    ))}

                </div>
            </MaxWidthContainer>
        </section>
    )
}
