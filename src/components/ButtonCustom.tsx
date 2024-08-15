import { classNames } from "@/utils/classNames"
import Link from "next/link"

interface ButtonCustomProps {
    text: string
    target?: string
    href: string
    className?: string
}

export const ButtonCustom = ({ text, target = "", href, className }: ButtonCustomProps) => {
    return (
        <Link href={href} target={target} className={classNames("gap-1 text-lg flex-col w-max uppercase center ", className)}>

            <span className="px-3">{text}</span>
            <div className="w-full rounded-full h-[.5rem] border-2 bg-primary-color" />


        </Link>
    )
}
