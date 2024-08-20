

import { useScroll, useTransform, motion } from "framer-motion"
import "./marquee.css"


export const Marquee = () => {

    return (

        <motion.span className="text-nowrap uppercase marquee px-8 text-title-home">
            Jhonatan + Santana +
        </motion.span>

    )
}