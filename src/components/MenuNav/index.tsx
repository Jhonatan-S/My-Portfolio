
import { easeInOut, motion } from "framer-motion"
import { ItemNav } from './ItemNav'
import { IconsSocials } from './IconsSocials'
import { oswald } from '@/assets'
import { useMenuProvider } from '@/lib/contexts/menuContext/menuContext'
import { LogOut } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useTranslations } from "next-intl"

export const Nav = () => {
    const { menuOpen, setMenuOpen, setBackgroundMenu } = useMenuProvider()
    const pathName = usePathname()
    const t = useTranslations("ItemNav")

    const delayContainerNav = menuOpen ? .5 : 1.2
    const variantsContainerNav = {
        initial: { width: 0, },
        animate: { width: menuOpen ? "100%" : 0 }
    }

    // Criei essa função pois os elementos filhos estavam herdando a função onClick de fechar o menu da div principal. Quando o usuário clicar fora do container nav o menu deve fechar, estava acontecendo que qualquer lugar que o usuário clicava o menu fechava
    const handleClickInside = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const handleToogleMenu = () => {

        setMenuOpen(false)
    }

    return (
        <motion.nav
            variants={variantsContainerNav}
            initial={"initial"}
            animate={"animate"}
            exit={{ width: 0 }}
            onClick={handleClickInside}
            transition={{ duration: .5, delay: delayContainerNav, ease: easeInOut }}
            className="bg-white flex flex-col m-1 max-w-[65rem] w-full rounded-md overflow-hidden relative pt-10 overflow-y-auto max-h-screen"
        >
            {/* BOTÃO PARA FECHAR O MENU DE NAVEGAÇÃO */}
            <span onClick={handleToogleMenu} className="absolute cursor-pointer right-5 top-5 font-bold uppercase">CLOSE</span>

            <div className="flex flex-col justify-between h-full p-10">
                <div className={`${oswald.className} text-[3.45rem] flex flex-col gap-3 font-bold uppercase`}>
                    <ItemNav />
                    <IconsSocials />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ y: menuOpen ? 0 : 30, opacity: menuOpen ? 1 : 0 }}
                    transition={{ duration: .5, delay: 1 }}
                    className="pt-10 pb-0"
                >
                    <span className="text-sm">©Copyright 2024. <span>{t("copyright")}</span></span>
                </motion.div>
            </div>
        </motion.nav>
    )
}
