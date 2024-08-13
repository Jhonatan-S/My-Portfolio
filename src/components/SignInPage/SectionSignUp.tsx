
import React, { FormEvent } from 'react'
import { Input } from './Input'
import { SocialsSingIn } from './SocialsSingIn'
import { useAuth } from '@/lib/contexts/authContext.tsx/AuthContext'
import { ButtonAuth } from './ButtonAuth'

export const SectionSignUp = () => {

    const {setShowSectionSignIn, handleCreateUserWithEmailAndPassowrd, error} = useAuth()

    const signUp = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget;
        const name = form.elements.namedItem("name-sign-up") as HTMLInputElement
        const email = form.elements.namedItem("email-sign-up") as HTMLInputElement
        const password = form.elements.namedItem("password-sign-up") as HTMLInputElement
        const confirmPassword = form.elements.namedItem("password-confirm-sign-up") as HTMLInputElement

        handleCreateUserWithEmailAndPassowrd(name.value, email.value, password.value, confirmPassword.value)
    }
    return (
        <form onSubmit={signUp} className="flex flex-col w-full max-w-[25rem] gap-3">
            <h1 className="text-[2rem] font-bold">Login</h1>

            <Input
                id='name-sign-up'
                type='text'
                label='Nome'
            />
            <Input
                id='email-sign-up'
                type='email'
                label='E-mail'
            />
            <Input
                id='password-sign-up'
                type='password'
                label='Senha'
            />
            <Input
                id='password-confirm-sign-up'
                type='password'
                label='Confirme sua senha'
            />
            <div className='min-h-[1rem] text-red-500 font-bold'>{error}</div>
            <ButtonAuth text='Cadastrar'/>
            <span className='text-sm'>Já possuí uma conta? <button  onClick={() => setShowSectionSignIn(true)} type='button' className='text-primary-color font-bold'>Faça o login</button></span>

            <SocialsSingIn />
        </form>
    )
}
