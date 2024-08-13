"use client"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

interface InputProps {
    id: string
    label: string
    type: 'email' | 'password' | 'text'
}

export const Input = ({ id, type, label }: InputProps) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='flex flex-col gap-3'>
            <label htmlFor={id}>{label}</label>
            <div className="relative">
                <input
                    required
                    id={id}
                    type={showPassword ? "text" : type}
                    className="bg-[#727272] w-full rounded-md p-2 outline-none focus:outline-none"
                />
                {type === "password" && (
                    <button onClick={() => setShowPassword(!showPassword)} type="button">
                        {showPassword ?
                            <EyeOff width={20} className="absolute right-2 top-[50%] translate-y-[-50%]" />
                            :

                            <Eye width={20} className="absolute right-2 top-[50%] translate-y-[-50%]" />
                        }
                    </button>
                )}
            </div>

        </div>
    )
}
