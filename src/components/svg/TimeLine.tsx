"use client"
import { PropsSvg } from "@/@types/svg"
import { motion, useScroll, useTransform } from "framer-motion"

export const TimeLine = ({ containerRef, ...props }: PropsSvg) => {

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start -10%", "end end"]
    })

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <svg {...props} viewBox="0 0 1742 2365" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
            initial={{pathLength: 0}}
            style={{pathLength}}
            d="M857.752 0V220.451C857.752 275.793 902.615 320.656 957.957 320.656H1639.35C1694.69 320.656 1739.56 365.52 1739.56 420.861V788.614C1739.56 843.956 1694.69 888.819 1639.35 888.819H102.205C46.8635 888.819 2 933.683 2 989.025V2364.34" stroke="#E5E6E8" strokeWidth="3">

            </motion.path>
            <motion.path 
            initial={{pathLength: 0}}
            style={{pathLength}}
             d="M857.752 0V220.451C857.752 275.793 902.615 320.656 957.957 320.656H1639.35C1694.69 320.656 1739.56 365.52 1739.56 420.861V788.614C1739.56 843.956 1694.69 888.819 1639.35 888.819H102.205C46.8635 888.819 2 933.683 2 989.025V2364.34" stroke="url(#line-progress)" strokeWidth="3">

            </motion.path>
            <defs>
                <linearGradient id="line-progress" x1="-106" y1="2316.5" x2="-117" y2="-45.4999" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E5E6E8"></stop>
                    <stop offset="0.172313" stopColor="#324EEF"></stop>
                    <stop offset="0.881552" stopColor="#324EEF"></stop>
                    <stop offset="1" stopColor="#E5E6E8"></stop>
                </linearGradient>
            </defs>
        </svg>
    )
}
