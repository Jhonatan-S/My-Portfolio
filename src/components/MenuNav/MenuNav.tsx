"use client"

import { easeInOut, motion } from "framer-motion"
import { useState, useEffect } from "react"
import { oswald } from "@/assets"
import { IconsSocials } from "./IconsSocials"
import { ItemNav } from "./ItemNav"
import { Nav } from "."
import { useMenuProvider } from "@/lib/contexts/menuContext/menuContext"


export const MenuNav = () => {
    const { menuOpen, setMenuOpen, backgroundMenu } = useMenuProvider()
    const [isVisible, setIsVisible] = useState(false)

    // Delay e duração das animações do framer-motion
    const delayContainerMain = menuOpen ? 0 : 1.5

    const duration = .5

    // Variants de animação do framer motion 
    const variantsContainerMain = {
        initial: { opacity: 0, background: "#00000098" },
        animate: { opacity: 1, x: menuOpen ? 0 : "100%", },
    }

    const variantsContainerSecondary = {
        initial: { background: "#00000098" },
        animate: { background: menuOpen ? "#00000098" : backgroundMenu || "#00000098"},
    }

    useEffect(() => {
        if (menuOpen) {
            setIsVisible(true)
        }

    }, [menuOpen])




    const handleToogleMenu = () => {

        setMenuOpen(false)
    }



    return (
        isVisible && (
            // ESSE É O CONTAINER PRINCIPAL
            <motion.div
                onClick={handleToogleMenu}
                className={`fixed z-[888] w-full min-h-screen `}
                initial={"initial"}
                animate={"animate"}
                variants={variantsContainerMain}
                transition={{ duration: duration, delay: delayContainerMain }}
                onAnimationComplete={() => {
                    // Adicionei essa função que executa no inal da animação e coloquei essa condição para que o menu deixa de ser visível apenas quando o menuOpen for falso, ou seja, apenas quando o usuário realmente quiser fechar. Acontecei que o menu deixava de ser vísivel quando o usuário abrisse o menu, pois quando abre também tem animação. (essa função executa no final da animação) 
                    if (!menuOpen) {
                        setIsVisible(false)
                    }
                }}
            >
                {/* ESSE AQUI É CONTAINER SECUNDÁRIO */}
                <motion.div
                    variants={variantsContainerSecondary}
                    onClick={handleToogleMenu}
                    className={`w-full min-h-screen flex justify-center md:justify-end`}
                    initial={"initial"}
                    animate={"animate"}
                    transition={{ duration: .1 }}

                >
                    <Nav />

                </motion.div>


            </motion.div>
        )
    )
}