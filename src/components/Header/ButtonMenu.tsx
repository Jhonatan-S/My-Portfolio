"use client"
import { plus } from "@/assets"
import { useMenuProvider } from "@/lib/contexts/menuContext/menuContext"
import Image from "next/image"

export const ButtonMenu = () => {

    const { menuOpen, setMenuOpen } = useMenuProvider()


    const handleToogleMenu = () => {

        setMenuOpen(!menuOpen)
    }

    return (
        <button onClick={handleToogleMenu} type="button" className={`bg-white center size-[3.5rem] md:size-[5rem] relative rounded-full overflow-hidden border-[5px] border-white transition-rotate duration-[.3s] shadow-md shadow-black ${menuOpen ? "rotate-45" : "rotate-0"}`}>

            <Image className="w-[1.5rem] md:w-[2rem]" src={plus} alt="PLUS ICON" width={30} height={30} />

        </button>
    )
}
