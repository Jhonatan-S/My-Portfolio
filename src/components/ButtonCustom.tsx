import Link from "next/link"

interface ButtonCustomProps {
    text: string
    target?: string
    href: string
}

export const ButtonCustom = ({ text, target = "", href }: ButtonCustomProps) => {
    return (
        <Link href={href} target={target} className="gap-1 text-lg flex-col w-max uppercase center ">

            <span className="px-3">{text}</span>
            <div className="w-full rounded-full h-[.5rem] border-2 bg-primary-color" />


        </Link>
    )
}
