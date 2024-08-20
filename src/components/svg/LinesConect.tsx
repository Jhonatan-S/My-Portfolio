"use client"
import { PropsSvg } from "@/@types/svg"
import { motion, useScroll, useTransform } from "framer-motion"

export const LinesConect = ({containerRef, ...props}: PropsSvg) => {
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0%", "end end"]
    })
    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
    const strokeWidth = "4px"
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 912 317" fill="none" className="data_lines_svg">
            <motion.path initial={{ pathLength: 0 }} style={{pathLength}} d="M456 -195C456 463.876 -78.1243 998 -737 998" stroke="#FE0000" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth}>
            </motion.path>
            <motion.path initial={{ pathLength: 0 }} style={{pathLength}} d="M456 -195C456 463.876 990.124 998 1649 998" stroke="#FE0000" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth}></motion.path>
            <motion.path initial={{ pathLength: 0 }} style={{pathLength}} d="M456 -195C456 1747.94 -1119.06 3323 -3062 3323" stroke="#FE0000" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth}></motion.path>
            <motion.path initial={{ pathLength: 0 }} style={{pathLength}} d="M456 -195C456 1747.94 2031.06 3323 3974 3323" stroke="#FE0000" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth}></motion.path>
            <motion.path initial={{ pathLength: 0 }} style={{pathLength}} d="M456 -195C456 187.733 145.733 498 -237 498" stroke="#FE0000" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth}></motion.path>
            <motion.path initial={{ pathLength: 0 }} style={{pathLength}} d="M456 -195C456 91.6358 223.636 324 -63 324" stroke="#FE0000" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth}></motion.path>
            <motion.path initial={{ pathLength: 0 }} style={{pathLength}} d="M456 -195C456 187.733 766.267 498 1149 498" stroke="#FE0000" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth}></motion.path>
            <motion.path initial={{ pathLength: 0 }} style={{pathLength}} d="M456 -195C456 91.6358 688.364 324 975 324" stroke="#FE0000" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth}></motion.path>
            <motion.path initial={{ pathLength: 0 }} style={{pathLength}} d="M456 -195C456 463.876 -78.1243 998 -737 998" stroke="var(--swatch--brand)" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth} strokeDasharray="1000px 99999px" strokeDashoffset="0" className="data_line-animate"></motion.path>
            <motion.path d="M456 -195C456 463.876 990.124 998 1649 998" stroke="var(--swatch--brand)" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth} strokeDasharray="1000px 99999px" strokeDashoffset="0" className="data_line-animate" ></motion.path>
            <motion.path d="M456 -195C456 1747.94 -1119.06 3323 -3062 3323" stroke="var(--swatch--brand)" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth} strokeDasharray="1000px 99999px" strokeDashoffset="0" className="data_line-animate" ></motion.path>
            <motion.path d="M456 -195C456 1747.94 2031.06 3323 3974 3323" stroke="var(--swatch--brand)" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth} strokeDasharray="1000px 99999px" strokeDashoffset="0" className="data_line-animate" ></motion.path>
            <motion.path initial={{ pathLength: 0 }} style={{pathLength}} d="M456 -195C456 187.733 145.733 498 -237 498" stroke="var(--swatch--brand)" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth} strokeDasharray="1000px 99999px" strokeDashoffset="0" className="data_line-animate" ></motion.path>
            <motion.path initial={{ pathLength: 0 }} style={{pathLength}} d="M456 -195C456 91.6358 223.636 324 -63 324" stroke="var(--swatch--brand)" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth} strokeDasharray="1000px 99999px" strokeDashoffset="0" className="data_line-animate" ></motion.path>
            <motion.path initial={{ pathLength: 0 }} style={{pathLength}} d="M456 -195C456 187.733 766.267 498 1149 498" stroke="var(--swatch--brand)" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth} strokeDasharray="1000px 99999px" strokeDashoffset="0" className="data_line-animate" ></motion.path>
            <motion.path initial={{ pathLength: 0 }} style={{pathLength}} d="M456 -195C456 91.6358 688.364 324 975 324" stroke="var(--swatch--brand)" vectorEffect="non-scaling-stroke" strokeWidth={strokeWidth} strokeDasharray="1000px 99999px" strokeDashoffset="0" className="data_line-animate" ></motion.path>
        </svg>
    )
}
