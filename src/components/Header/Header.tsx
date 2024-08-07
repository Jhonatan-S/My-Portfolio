"use client"

import { logo } from "@/assets"
import Image from "next/image"
import { ButtonMenu } from "./ButtonMenu"
import Link from "next/link"
import { useMenuProvider } from "@/contexts/menuContext/menuContext"
import { useScroll, motion } from "framer-motion"
import { useEffect, useState } from "react"

export const Header = () => {

  const { setMenuOpen, menuOpen } = useMenuProvider()
  const [bg, setBg] = useState(false)

  const { scrollYProgress } = useScroll()

  useEffect(() => {

    window.addEventListener("scroll", () => {
      
      const scrollY = window.scrollY;

      if (scrollY > 500) {
        setBg(true)
      }
      else if (scrollY < 500) {
        setBg(false)
      }
    })

    return () => {
      window.removeEventListener
    }
  }, [])

  return (

    <motion.header
      animate={{ 
        background: bg ? '#00000080' : '#ffffff00', 
        backdropFilter: bg ? 'blur(20px)' : 'none', 
        boxShadow: bg ? '0px 4px 10px rgba(0, 0, 0, 0.5)' : 'none',
      }}
      transition={{duration: .5}}
      className={`px-px flex justify-between items-center fixed z-50 right-0 left-0 overflow-hidden origin-left`}>

      {/* BARRRA DE PROGRESSO */}
      <motion.div style={{ scaleX: scrollYProgress }} className="absolute top-0 right-0 left-0 h-[5px] bg-primary-color origin-left z-0"></motion.div>
      <div className="py-2 relative z-10">
        {/* Função onCLick porque sem ela, o usuário clica na logo porém se o menu estiver aberto ele não é fechado, ou seja, o usuário é redirecionado porém o menu continua aberto */}
        <Link onClick={() => {
          if (menuOpen) {
            setMenuOpen(false)
          }
        }} href={"/"}>
          <Image className="w-[4rem] md:w-[5rem]" src={logo} alt="" width={1000} height={1000} />
        </Link>
      </div>

      <ButtonMenu />
    </motion.header>
  )
}
