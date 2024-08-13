"use client"

import React from 'react'
import { SectionSignIn } from './SectionSignIn'
import { useAuth } from '@/lib/contexts/authContext.tsx/AuthContext'
import { SectionSignUp } from './SectionSignUp'

export const Form = () => {

    const { showSectionSignIn } = useAuth()

    return (

        <>
            {showSectionSignIn ?
                <SectionSignIn />
                :
                <SectionSignUp />
            }
        </>

    )
}
