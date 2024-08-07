'use client'

import { useContext, createContext } from "react";
import { useState } from "react";

type contextTypes = {
    menuOpen: boolean
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
    backgroundMenu: string
    setBackgroundMenu: React.Dispatch<React.SetStateAction<string>>
}

const context = createContext<contextTypes | null>(null)


export const MenuProvider = ({ children }: { children: React.ReactNode }) => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    const [backgroundMenu, setBackgroundMenu] = useState("")

    return (
        <context.Provider value={{ menuOpen, setMenuOpen, backgroundMenu, setBackgroundMenu}}>
            {children}
        </context.Provider>
    )
}

export const useMenuProvider = () => {

    const useMenu = useContext(context)

    if(!useMenu) {
        throw Error("O elemento pai precisar estar envolvido com <MenuProvider><MenuProvider/>")
    }

    return useMenu
}