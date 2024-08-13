"use client"

import { wallStone } from "@/assets"
import { ButtonCustom } from "@/components/ButtonCustom"
import { MaxWidthContainer } from "@/components/MaxWidthContainer"
import { Form } from "@/components/SignInPage/Form"
import Image from "next/image"
import { ToastContainer } from "react-toastify"

const SignInPage = () => {


    return (
        <main className="w-full relative">
            <section className="min-h-screen w-full relative center">
                <Image priority src={wallStone} alt="BG STONES" fill className="object-cover" />

                <MaxWidthContainer className="mt-10 md:mt-0">
                    <div className="relative w-full bg-[#00000069] backdrop-blur-sm min-h-[40rem] rounded-lg center text-white px-px py-10">
                        <Form />
                    </div>
                </MaxWidthContainer>
            </section>
            <ToastContainer />
        </main>
    )
}

export default SignInPage