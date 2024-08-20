
import { css, firebase, framerMotion, git, github, html, javascript, next, nextAuth, nextIntl, react, tailwind, typescript, vscode } from "@/assets"
import { motion, useScroll } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export const Techs = () => {

    const techs = [
        { icon: html, nameTech: "Html" },
        { icon: css, nameTech: "Css" },
        { icon: javascript, nameTech: "JavaScript" },
        { icon: typescript, nameTech: "TypeScript" },
        { icon: next, nameTech: "Next js" },
        { icon: react, nameTech: "ReactJs", width: 67, height: 67  },
        { icon: tailwind, nameTech: "Tailwind Css" },
        { icon: framerMotion, nameTech: "Framer Motion" },
        { icon: nextIntl, nameTech: "Next-Intl" },
        { icon: git, nameTech: "Git" },
        { icon: github, nameTech: "Github" },
        { icon: vscode, nameTech: "VsCode" },
        { icon: firebase, nameTech: "Firebase" },
        { icon: nextAuth, nameTech: "Next Auth", width: 53, height: 53 },
    ]

    return (
        <div className="gap-5 my-8 flex-wrap w-full center max-w-[40rem] relative ">
            {techs.map((el, index) => (
                <motion.div
                    initial={{ scale: 0}}
                    whileInView={{ scale: 1}}
                    viewport={{ once: true }}
                    className="center flex-col gap-2"
                    transition={{ duration: .5, delay: 0.2 * index }}
                    key={index}>
                    <Image src={el.icon} alt="TECH" width={el.width || 60} height={el.height || 60} />
                    <figure>{el.nameTech}</figure>
                </motion.div>
            ))}

        </div>
    )
}
