import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

interface Props {
    title: string
    date: string
    description: string
 
}

export const ContainerExperience = (props: Props) => {


    return (
        <div className={`sticky `} >
            <motion.div className="flex flex-col gap-5 w-full rounded-lg p-4 min-h-[20rem] border-primary-color border bg-[#494949]" >
                <div className='flex items-center gap-5 flex-wrap' >
                    <h2 className='font-bold text-lg '>{props.title} -</h2>
                    <span>
                        {props.date}
                    </span>
                </div>

                <div className='flex-1 flex items-center'>
                    <p className='max-w-[40rem]'>{props.description}</p>
                </div>

            </motion.div>
        </div>
    )
}
