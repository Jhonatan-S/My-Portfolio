"use client"

import { github, google } from '@/assets'
import Image from 'next/image'
import React from 'react'
import { useAuth } from '@/lib/contexts/authContext.tsx/AuthContext'

export const SocialsSingIn = () => {

    const { handleSignInWithGoogle, handleSignInWithGithub } = useAuth()

    return (
        <div className='center flex-col gap-3'>
            <div className='gap-1 w-full center'>
                <div className='w-full h-[3px] bg-gray-400'></div>
                <span>Ou</span>
                <div className='w-full h-[3px] bg-gray-400'></div>
            </div>
            <div className='center flex-col gap-4 w-full'>

                <button onClick={handleSignInWithGoogle} type='button' className='bg-white p-2 rounded-md center gap-4  w-full text-black text-sm'>
                    <Image src={google} alt='Google icon' width={25} height={25} />
                    <span>Entre com Google</span>
                </button>
                <button onClick={handleSignInWithGithub} type='button' className='bg-white p-2 rounded-md center gap-4  w-full text-black text-sm'>
                    <Image src={github} alt='Google icon' width={25} height={25} />
                    <span>Entre com GitHub</span>
                </button>
            </div>
        </div>
    )
}
