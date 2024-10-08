import { dcm, plexus, villaCanaa } from "@/assets"
import { Card } from "./Card"
import { ButtonCustom } from "@/components/ButtonCustom"
import { MaxWidthContainer } from "@/components/MaxWidthContainer"
import { useTranslations } from "next-intl"
import { useScroll } from "framer-motion"


export const SectionProjects = () => {
    const t = useTranslations("HomePage.Projects")
    const {scrollYProgress} = useScroll()


    return (
        <section className="pb-10 bg-[#ffffff9e] backdrop-blur-[30px]">
            <MaxWidthContainer className="center gap-16 flex-col">
                <div className="">
                    <h2 className="text-3xl md:text-5xl uppercase">{t("title")}</h2>
                </div>
                <div className="flex-wrap w-full gap-3 center">
                    <Card
                        href="https://www.agenciaplexus.com.br/"
                        title="Plexus"
                        description={t("plexus")}
                        imgProject={plexus}
                    />  <Card
                        href="https://www.pousadavillacanaareservas.com.br/"
                        title="Pousada Villa Canaã"
                        description={t("villacanaa")}
                        imgProject={villaCanaa}
                    />  <Card
                        href="https://dcm-5m53.vercel.app/"
                        title="dcm plus"
                        description={t("dcm")}
                        imgProject={dcm}
                    />
                </div>
                <div>
                    <ButtonCustom href="/projects" text={t("button")} />
                </div>
            </MaxWidthContainer>
        </section>
    )
}
