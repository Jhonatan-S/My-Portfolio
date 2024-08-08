
import { me } from "@/assets"
import { getDimentions } from "@/hooks/getDimentions"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface ColoumnPicturesProps {
    containerRef?: React.MutableRefObject<null>
}

export const ColoumnPictures = ({containerRef}: ColoumnPicturesProps) => {

    const {widthWindow} = getDimentions()

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 85%", "end start"]
    })
    

    const x = useTransform(scrollYProgress, [0 ,1], [0 , -widthWindow])

    return (
        <motion.div className=" max-h-screen overflow-hidden hidden md:flex">
            <motion.div style={{ x }} className="flex gap-10 w-max h-max">
                {me.map((el, index) => (
                    <div key={index} className="w-[15rem] h-[20rem] relative">
                        <Image priority src={el} alt="ME" fill className="object-cover" sizes="100%"/>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}
