
import { oswald } from "@/assets"
import { motion } from "framer-motion"
import React, { useState } from 'react'
import { useTranslations } from "next-intl"

export const Languages = () => {

    const t = useTranslations("Habilities")

    const langs: { lang: string, level: 1 | 2 | 3 | 4 | 5 | 6 | 7 }[] = [
        { lang: `${t("portuguese")}`, level: 7 },
        { lang: `${t("english")}`, level: 5 },
        { lang: `${t("spanish")}`, level: 4 }
    ]

    return (
        <div className="flex flex-col py-2 w-full">
            {langs.map((lang, index) => (
                <ContainerLang key={index} i={index} lang={lang.lang} level={lang.level} />
            ))}
        </div>
    )
}

interface ContainerLangProps {

    level: 1 | 2 | 3 | 4 | 5 | 6 | 7
    lang: string
    i?: number
}

export const ContainerLang = ({ level, lang, i = 0 }: ContainerLangProps) => {

    const [showLevel, setShowLevel] = useState(false)
    const t = useTranslations("Habilities")
    return (
        <div className={`${oswald.className} flex items-center gap-3 relative text-lg `}>
            <span className="min-w-[6rem] uppercase ">{lang}</span>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.2 }}
                onAnimationComplete={() => setShowLevel(true)}
                className={`w-full origin-left  
                ${level < 3 && " max-w-[5rem]" ||
                    level > 2 && level < 5 && " max-w-[10rem]" ||
                    level === 5 && " max-w-[20rem]" ||
                    level === 6 && "max-w-[25rem]" ||
                    level === 7 && "max-w-[25rem]"} 
                h-2 rounded-full bg-green-500 ` } />
            <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: showLevel ? 1 : 0, scale: showLevel ? [0, 1.5, 1] : 0 }}

                className=''>{level < 3 && "Básico" || level > 2 && level < 5 && `${t("intermediate")}` || level === 5 && `${t("advanced")}` || level === 6 && "Fluente" || level === 7 && `${t("native")}`}</motion.span>
        </div>
    )
} 
