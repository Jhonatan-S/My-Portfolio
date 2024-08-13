"use client"

import { plus } from "@/assets"
import { useAuth } from "@/lib/contexts/authContext.tsx/AuthContext"
import { useMenuProvider } from "@/lib/contexts/menuContext/menuContext"
import Image from "next/image"

export const ButtonMenu = () => {

    const { menuOpen, setMenuOpen } = useMenuProvider()
    const { user } = useAuth()

    const handleToogleMenu = () => {

        setMenuOpen(!menuOpen)
    }

    return (
        <button onClick={handleToogleMenu} type="button" className={`bg-white center size-[3.5rem] md:size-[5rem] relative rounded-full overflow-hidden border-[5px] border-white transition-rotate duration-[.3s] shadow-md shadow-black ${menuOpen ? "rotate-45" : "rotate-0"}`}>
            {user ?
                <>
                    {user.photoURL ?
                        <Image src={user.photoURL} alt="PROFILE PIC" fill className="object-cover" />
                        :
                        <span className="text-[1.2rem] md:text-[1.7rem] font-bold uppercase">{user.displayName?.charAt(0)}</span>
                    }
                </>
                :
                <Image className="w-[1.5rem] md:w-[2rem]" src={plus} alt="PLUS ICON" width={30} height={30} />
            }
        </button>
    )
}
