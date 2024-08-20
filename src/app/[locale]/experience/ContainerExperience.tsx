import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

interface Props {
    title: string
    date: string
    description: string
    company: string
}

export const ContainerExperience = (props: Props) => {


    return (
        <div className={`sticky `} >
            <motion.div className="flex flex-col gap-5 w-full max-w-[40rem] rounded-lg p-4 min-h-[22rem] border-primary-color border bg-[#020202e0]" >
                <div className="flex flex-col gap-3">
                    <div className='flex items-center gap-5 flex-wrap' >
                        <h2 className='font-bold text-lg '>{props.title} -</h2>
                        <span>
                            {props.date}
                        </span>
                    </div>
                    {props.company && (
                        <span>
                            {props.company}
                        </span>
                    )}
                </div>

                <div className='flex-1 flex items-center'>
                    <p className='max-w-[40rem]'>{props.description}</p>
                </div>

            </motion.div>
        </div>
    )
}
