

import { motion } from 'framer-motion'
import { useMenuProvider } from '@/contexts/menuContext/menuContext'
import { useRouter, usePathname } from 'next/navigation'

export const ItemNav = () => {

    const { menuOpen, setMenuOpen, backgroundMenu, setBackgroundMenu } = useMenuProvider()
    const router = useRouter()
    const currentPage = usePathname()

    const list_item = [
        { text: "Início", href: "/" },
        { text: "Sobre", href: "/about" },
        { text: "Projetos", href: "/projects" },
        { text: "Techs", href: "/techs" }
    ]

    const handleToogleMenu = (href: string) => {

        switch (href) {
            case "/":
                setBackgroundMenu("#2B1862")
                break
            case "/about":
                setBackgroundMenu("#ffffff")
                break
        }
        
        setMenuOpen(false)
    }

    return (
        <>
            {
                list_item.map((el, index) => (
                    <div key={index} className="relative max-h-[4.5rem] overflow-hidden w-max">
                        <motion.div
                            className="cursor-pointer"
                            onClick={() => { handleToogleMenu(el.href); router.push(el.href); }}
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
                            transition={{ duration: .5, delay: 0.3 * index }}
                        >
                            <motion.div

                                initial={{ y: currentPage === el.href ? "-5rem" : 0 }}
                                whileHover={{ y: "-5rem" }}
                                className="flex flex-col"
                            >
                                <span>{el.text}</span>
                                <span className="text-primary-color">{el.text}</span>
                            </motion.div>
                        </motion.div>
                    </div>
                ))
            }
        </>
    )
}
