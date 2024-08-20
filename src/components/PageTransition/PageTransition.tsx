"use client"

import { motion } from "framer-motion"

export const PageTransition = () => {
    return (
        <motion.div
        initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" }}

        animate={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}

        transition={{ duration: 1, delay: 1.1 }}
        className="min-h-screen w-full fixed z-[900] bg-white inset-0"
        >
            <motion.div

                initial={{ clipPath: " polygon(0 100%, 100% 100%, 100% 0, 0 0)" }}

                animate={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}

                transition={{ duration: 1, delay: .1 }}
                className="min-h-screen w-full fixed z-[900]  bg-black inset-0"
            >

            </motion.div>

        </motion.div>
    )
}
