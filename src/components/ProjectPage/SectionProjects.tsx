"use client"

import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { dcm, plexus, villaCanaa } from "@/assets"
import { MaxWidthContainer } from "../MaxWidthContainer"
import { Card } from "./Card"
import { useTranslations } from "next-intl"

export const SectionProjects = () => {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "start 20%"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
    const t =useTranslations("Projects")

    const text = {
        fontSize: "clamp(4rem, 9vw, 10vw)",
        lineHeight: "clamp(5rem, 10vw, 10vw)"
    }

    const projetcs = [
        {
            title: "Plexus site",
            description: t("plexus"),
            img: plexus,
            href: "https://www.agenciaplexus.com.br/"
        },
        {
            title: "Dcm site",
            description: t("dcm"),
            img: dcm,
            href: "https://dcm-5m53.vercel.app/"
        },
        {
            title: "Villa Canaã Landing Page",
            description: t("villacanaa"),
            img: villaCanaa,
            href: "https://pousadavillacanaareservas.com.br/"
        }

    ]

    return (
        <section ref={ref} className='flex min-h-screen flex-col py-10 w-full gap-5 relative font-bold'>
            <MaxWidthContainer className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                    <h1 className="text-center text-5xl bg-primary-color rounded-lg p-2">{t("titleProjects")}</h1>
                    <h2 className="text-center uppercase">{t("subtitleFreelance")}</h2>
                    <div className="grid grid-cols-1  md:grid-cols-2 gap-4 p-4 content-center">
                        {projetcs.map((el, index) => (
                            <Card
                                key={index}
                                imgPath={el.img}
                                href={el.href}
                                title={el.title}
                                description={el.description}
                            />
                        ))}
                    </div>
                </div>
            </MaxWidthContainer>
        </section>
    )
}
