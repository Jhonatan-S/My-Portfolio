
import { bgDots, css, firebase, framerMotion, git, github, html, javascript, next, react, tailwind, typescript, vscode } from "@/assets"
import { motion } from "framer-motion"
import Image from "next/image"

export const Techs = () => {

    const techs = [
        { icon: html, nameTech: "Html" },
        { icon: css, nameTech: "Css" },
        { icon: javascript, nameTech: "JavaScript" },
        { icon: typescript, nameTech: "TypeScript" },
        { icon: next, nameTech: "Next js" },
        { icon: react, nameTech: "ReactJs" },
        { icon: tailwind, nameTech: "Tailwind Css" },
        { icon: framerMotion, nameTech: "Framer Motion" },
        { icon: firebase, nameTech: "Firebase" },
        { icon: git, nameTech: "Git" },
        { icon: github, nameTech: "Github" },
        { icon: vscode, nameTech: "VsCode" },
    ]

    return (
        <div className="gap-5 my-8 flex-wrap w-full center max-w-[40rem] relative">
            {techs.map((el, index) => (
                <motion.div
                    initial={{ opacity: 0, x: index * -5, y: index * -25 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    className="center flex-col gap-2"
                    transition={{ duration: .5, delay: 0.2 * index }}
                    key={index}>
                    <Image src={el.icon} alt="TECH" width={60} height={60} />
                    <figure>{el.nameTech}</figure>
                </motion.div>
            ))}

        </div>
    )
}
