

import { useAuth } from '@/lib/contexts/authContext.tsx/AuthContext'
import React from 'react'



export const ButtonAuth = ({text}: {text: string}) => {

    const { isLoading } = useAuth()
    return (
        <button className='p-2 bg-black border-[1px] h-[3rem] rounded-md center'>
            {isLoading ?
                <div className='rounded-full animate-spin w-[2rem] h-[2rem] border-[.2rem] border-white relative'>
                    <div className='w-2 h-2 bg-black absolute left-[50%] translate-x-[-50%] top-[-.4rem]'></div>
                </div>
                :
                <span>{text}</span>
            }
        </button>
    )
}
