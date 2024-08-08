
import { me } from "@/assets"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { MutableRefObject } from "react"

interface ColoumnPicturesProps {
    containerRef?: React.MutableRefObject<null>
}

export const ColoumnPictures = ({containerRef}: ColoumnPicturesProps) => {

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 85%", "end start"]
    })
    


    const x = useTransform(scrollYProgress, [0 ,1], [0 , -window.innerHeight])

    return (
        <motion.div className=" max-h-screen overflow-hidden hidden md:flex">
            <motion.div style={{ x }} className="flex gap-10 w-max h-max">
                {me.map((el, index) => (
                    <div key={index} className="w-[15rem] h-[20rem] relative">
                        <Image priority src={el} alt="ME" fill className="object-cover"/>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}
