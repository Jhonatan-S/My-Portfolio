import {  linkedinLetter } from "@/assets"
import Image from "next/image"
import Link from "next/link"

export const WhatsappButtonFixed = () => {

    const clipPath = {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)"
    }

    return (
        <Link target="_blank" href={"https://www.linkedin.com/in/jhonatan-santana0/"} className="bg-primary-color fixed bottom-5 right-5 size-[4rem] center" style={clipPath}>
            <Image className="absolute top-[16%]" src={linkedinLetter} alt="WHATSAPP ICON" width={25} height={25}/>
        </Link>  
    )
}
