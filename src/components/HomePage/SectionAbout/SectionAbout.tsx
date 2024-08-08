import { MaxWidthContainer } from "@/components/MaxWidthContainer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { ColoumnPictures } from "./ColoumnPictures"
import { ButtonCustom } from "@/components/ButtonCustom"
import { useDimentios } from "@/hooks/useDimentions"


export const SectionAbout = () => {

    const ref = useRef(null)

    const {widthWindow, heightWindow} = useDimentios()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [heightWindow < 700 ? "start 85%": "start 60%", "start start"],
    })

    const x = useTransform(scrollYProgress, [0, 1], [0, -widthWindow])
    const x1 = useTransform(scrollYProgress, [0, 1], [0, widthWindow])
    const scale = useTransform(scrollYProgress, [0, 1], [0, 1])


    return (
        <section ref={ref} className="w-full pb-20 flex min-h-[45rem] justify-center overflow-hidden">
            <MaxWidthContainer className="center flex-col gap-8">

                <div className="flex gap-5 text-[3rem] md:text-[6rem] font-bold">
                    <motion.h2 style={{ x }} >Sobre</motion.h2>
                    <motion.h2 style={{ x: x1 }} className="text-primary-color">Mim</motion.h2>
                </div>

                <ColoumnPictures containerRef={ref} />

                <motion.div
                    style={{ scale }}
                    transition={{ duration: 1 }}
                    className="origin-top">
                    <p className="max-w-[45rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, tenetur in cum expedita, autem voluptatem quae saepe explicabo sequi distinctio suscipit atque corrupti amet impedit nam quasi maiores vel mollitia ad libero optio pariatur ipsa reprehenderit cumque! Labore, recusandae. Doloribus praesentium repellat quo ullam ex odio necessitatibus doloremque ipsa alias repudiandae esse autem eaque quas odit voluptas, qui veritatis eveniet et quidem earum soluta temporibus quos animi distinctio! Itaque, expedita saepe molestias, mollitia provident eos veritatis sint dolorum ipsam veniam dolores! Nobis, rerum, nesciunt similique dolor optio quisquam beatae exercitationem hic labore ab quis deleniti. Praesentium voluptates voluptatibus, beatae excepturi, rerum molestiae incidunt temporibus quas tempora soluta quae obcaecati sint vel dicta tenetur fugit id, ad autem adipisci sapiente. Qui nisi id maxime amet sequi blanditiis pariatur aspernatur commodi? Totam iste, illo aliquam nisi, ipsum dolores a veniam hic recusandae eius assumenda? Sapiente inventore minus in distinctio tenetur similique atque voluptatum suscipit repellendus! Quidem, modi repudiandae. Quas quis accusantium aperiam fugiat doloribus obcaecati eius dolorem, at aut iure veritatis non quibusdam, voluptas qui quia aliquam sint unde id. Officiis qui eligendi vitae ipsa ratione excepturi obcaecati dolorem repudiandae officia, in nobis laborum, architecto provident cumque sequi quos saepe asperiores labore!

                    </p>
                </motion.div>

                <ButtonCustom href="" text="Saiba tudo sobre mim"/>
            </MaxWidthContainer>
        </section>
    )
}
