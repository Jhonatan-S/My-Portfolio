
import { montserrat, oswald, plexus } from '@/assets'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from "framer-motion"
import { ButtonCustom } from '@/components/ButtonCustom'
import { useTranslations } from 'next-intl'
interface CardProps {
    imgProject: string
    title: string
    description: string
    href: string
}

export const Card = ({...props}: CardProps) => {

    const [mouseHover, setMouseHover] = useState(false)
    const t = useTranslations("Projects")
    return (
        <div
            onMouseEnter={() => setMouseHover(true)}
            onMouseLeave={() => setMouseHover(false)}
            className={`cursor-pointer w-full max-w-[23rem] h-[13rem] sm:max-w-[26rem] md:max-w-[40rem] sm:h-[15rem] md:h-[23rem] border-2 border-primary-color rounded-md flex justify-center flex-col overflow-hidden relative`}>
            <Image src={props.imgProject} alt='WALLPAPER' fill className={`object-cover inset-0 w-full h-full  transition-all duration-[.5s] ${mouseHover && "blur-lg "}`} />

            {mouseHover && (
                <div className={`${oswald.className} w-full h-full relative text-white flex flex-col justify-end p-3 md:p-10 gap-2 bg-[#0000005e]`}>
                    <div className='max-w-[23rem]'>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: mouseHover ? 1 : 0, x: mouseHover ? 0 : -30 }}
                            className='text-[1.1rem] md:text-2xl font-bold uppercase'>{props.title}</motion.h2>
                        <p className={`${montserrat.className} text-base`}>{props.description}</p>
                    </div>
                    <div>
                        <ButtonCustom target='_blank' href={props.href}  text={t("visitWebsite")}/>
                    </div>
                </div>
            )}
        </div>
    )
}
