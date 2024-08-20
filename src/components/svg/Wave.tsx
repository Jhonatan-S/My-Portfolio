import { PropsSvg } from "@/@types/svg"
import { motion, useScroll, useTransform } from "framer-motion"


export const WaveSvg = ({ containerRef, ...props }: PropsSvg) => {

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end end"]
    })

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 951 367" fill="none">
            <motion.path

                style={{ pathLength }}
                initial={{ pathLength: 0 }}
                d="M926 366V41.4C926 32.7 919 25.6 910.2 25.6C904.6 25.6 899.7 28.4 897 32.9L730.2 333.3C727.5 338 722.3 341.2 716.5 341.2C707.8 341.2 700.7 334.2 700.7 325.4V41.6C700.7 32.9 693.7 25.8 684.9 25.8C679.3 25.8 674.4 28.6 671.7 33.1L504.7 333.3C502 338 496.8 341.2 491 341.2C482.3 341.2 475.2 334.2 475.2 325.4V41.6C475.2 32.9 468.2 25.8 459.4 25.8C453.8 25.8 448.9 28.6 446.2 33.1L280.2 333.3C277.5 338 272.3 341.2 266.5 341.2C257.8 341.2 250.7 334.2 250.7 325.4V41.6C250.7 32.9 243.7 25.8 234.9 25.8C229.3 25.8 224.4 28.6 221.7 33.1L54.7 333.3C52 338 46.8 341.2 41 341.2C32.3 341.2 25.2 334.2 25.2 325.4V1" stroke="#020202" strokeWidth="50" strokeMiterlimit="10" strokeLinejoin="round">

            </motion.path>
        </svg>
    )
}
