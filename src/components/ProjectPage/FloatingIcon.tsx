
import { classNames } from '@/utils/classNames'
import Image from 'next/image'
import React from 'react'

interface Props {
    img: string
    className?: string
}
export const FloatingIcon = ({img, className}: Props) => {
    return (
        <div className={classNames('bg-[#0000000b] backdrop-blur-sm size-[5rem] border-[#3e3e3e] rounded-full border-[1px] hidden lg:flex items-center justify-center animate-floating', className)}>
            <Image src={img} alt='TECH ICON' width={30} height={30} />
        </div>
    )
}
