
import { github, linkedin } from '@/assets'
import { useMenuProvider } from '@/contexts/menuContext/menuContext'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const IconsSocials = () => {

    const {menuOpen} = useMenuProvider()

    const sociais_icons = [
        { icon: linkedin, alt: "LINKEDIN ICON", w: 33, h: 33, href: "https://www.linkedin.com/in/jhonatan-santana0/", text: "Linkedin" },
        { icon: github, alt: "GITHUB ICON", w: 30, h: 30, href: "https://github.com/Jhonatan-S", text: "GitHub" },
    ]

    return (
        <div className="flex gap-10 items-center mt-5">
            {sociais_icons.map((el, index) => (
                <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : -20 }}
                    transition={{ duration: .5, delay: 0.4 * index }}
                    key={index} href={el.href} target="_blank"
                    className="center flex-col gap-3"
                >
                    <div className="gap-3 text-lg uppercase center px-3">
                        <Image src={el.icon} alt={el.alt} width={el.w} height={el.h} />
                        <span>{el.text}</span>
                    </div>
                    <div className="w-full rounded-full h-[.5rem] border-2 bg-primary-color">

                    </div>
                </motion.a>
            ))}
        </div>
    )
}
