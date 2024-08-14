import Image from "next/image"
import { motion } from "framer-motion"
import { WaveSvg } from "@/components/svg/Wave"
import { useRef } from "react"
import { Languages } from "./Languages"
import { Techs } from "./Techs"
import { bgDots } from "@/assets"
import { MaxWidthContainer } from "@/components/MaxWidthContainer"
import { useTranslations } from "next-intl"

export const TechsSection = () => {

    const ref = useRef(null)
    const t = useTranslations("Habilities")

    return (
        <section ref={ref} className="w-full relative flex justify-center py-20">

            <Image priority src={bgDots} alt="bg" fill className="object-cover" />
            <MaxWidthContainer>

                <div className="relative gap-5">
                    <div className="center flex-col gap-5">
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="text-center text-[2rem] md:text-[3rem] max-w-[77rem] font-bold">{t("title")}
                        </motion.h1>
                        <div className="w-full max-w-[50rem]">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: .1 }}
                                className="center rounded-full w-full  border-2 py-2">
                                <span className="font-bold text-primary-color text-center text-lg">{t("subtitle")}</span>

                            </motion.div>
                            <Languages />
                        </div>

                        <Techs />
                       
                    </div>
                </div>
            </MaxWidthContainer>

            <WaveSvg containerRef={ref} className="absolute left-0 top-0 opacity-15 -rotate-90" width={300} height={300} />
        </section>
    )
}
