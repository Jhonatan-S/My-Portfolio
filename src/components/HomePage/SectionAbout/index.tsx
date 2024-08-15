import { MaxWidthContainer } from "@/components/MaxWidthContainer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { ColoumnPictures } from "./ColoumnPictures"
import { ButtonCustom } from "@/components/ButtonCustom"
import { useDimentios } from "@/hooks/useDimentions"
import { useTranslations } from "next-intl"

export const SectionAbout = () => {

    const ref = useRef(null)

    const {widthWindow, heightWindow} = useDimentios()
    const t = useTranslations("HomePage.About")

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [heightWindow < 900 ? "start 80%": "start 60%", "start start"],
    })

    const x = useTransform(scrollYProgress, [0, 1], [0, -widthWindow])
    const x1 = useTransform(scrollYProgress, [0, 1], [0, widthWindow])
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])


    return (
        <section id="about" ref={ref} className="w-full pb-20 flex min-h-screen justify-center overflow-hidden">
            <MaxWidthContainer className="center flex-col gap-8">

                <motion.div style={{opacity}} className="flex gap-5 text-[3rem] md:text-[6rem] font-bold">
                    <motion.h2 style={{ x }} >{t("titleAbout")}</motion.h2>
                    <motion.h2 style={{ x: x1 }} className="text-primary-color">{t("titleMe")}</motion.h2>
                </motion.div>

                <ColoumnPictures containerRef={ref} />

                <motion.div
                    style={{ scale }}
                    transition={{ duration: 1 }}
                    className="origin-top">
                    <p className="max-w-[45rem]">
                       {t("paragraph")}

                    </p>
                </motion.div>
                <ButtonCustom href="/about" text={t("button")}/>
            </MaxWidthContainer>
        </section>
    )
}
