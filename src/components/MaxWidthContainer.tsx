
import React from 'react'

export const MaxWidthContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full max-w-[85rem] px-px mx-auto'>
        {children}
    </div>
  )
}
