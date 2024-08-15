
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

interface CardProps {
    imgPath: string,
    title: string
    description: string
    href: string
}


export const Card = (props: CardProps) => {

    const [hover, setHover] = useState<boolean>(false)

    return (

        <div className='w-full max-w-[40rem] border-[1px] border-gray-200 p-3 flex flex-col justify-between rounded-xl'>
            <Link target='_blank' href={props.href}>
                <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='w-full cursor-pointer overflow-hidden rounded-xl'>
                    <Image src={props.imgPath} alt='Project' className=' w-full hover:scale-105 transition-all duration-[.4s]'  width={1000} height={1000}/>
                </div>
            </Link>
            <div className='p-3 flex flex-col gap-4 font-normal'>
                <div className='flex justify-between'>
                    <h2 className='text-[1.5rem] sm:text-[2rem] w-max'>{props.title}</h2>
                    <Link target='_blank' href={props.href} className={`${hover ? "bg-primary-color text-white" : "bg-gray-300"}  center h-max p-2 rounded text-xs transition-colors duration-[.2s] text-center`}>Visitar site</Link>
                </div>
                <p>{props.description}</p>
            </div>

        </div>

    )
}
