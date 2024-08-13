

import React, { FormEvent } from 'react'
import { Input } from './Input'
import { SocialsSingIn } from './SocialsSingIn'
import { useAuth } from '@/lib/contexts/authContext.tsx/AuthContext'
import { ButtonAuth } from './ButtonAuth'

export const SectionSignIn = () => {

    const { setShowSectionSignIn, handleSignInWithEmailAndPassword, error } = useAuth()


    const handleSingIn = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget;
        const email = form.elements.namedItem("email-sign-in") as HTMLInputElement
        const password = form.elements.namedItem("password-sign-in") as HTMLInputElement

        handleSignInWithEmailAndPassword(email.value, password.value)
    }


    return (
        <form onSubmit={handleSingIn} className="flex flex-col w-full max-w-[25rem] gap-3">
            <h1 className="text-[2rem] font-bold">Login</h1>

            <Input
                id='email-sign-in'
                type='email'
                label='E-mail'
            />

            <Input
                id='password-sign-in'
                type='password'
                label='Senha'
            />

            <div className='min-h-[1rem]'>{error}</div>
            <ButtonAuth text='Entrar' />
            <span className='text-sm'>Ainda não possuí uma conta? <button onClick={() => setShowSectionSignIn(false)} type='button' className='text-primary-color font-bold'>Cadastre-se</button></span>
            <SocialsSingIn />
        </form>
    )
}
