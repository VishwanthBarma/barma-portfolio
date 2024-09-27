import { cn } from "@/lib/utils"
import React from "react"

type Props = {
    children: React.ReactNode
    className?: String
}

const TextColorGradient = ({ children, className }: Props) => {
    return (
        <div
            className={`${className} relative bg-clip-text text-transparent bg-gradient-to-r from-emerald-600/80 via-emerald-400 to-emerald-600/80`}
        >
            <div
                className={cn(
                    "absolute rounded-[50%] radial--blur3 -z-10 w-20 h-10 top-0 left-1/2 opacity-80",
                )}
            />
            {children}
        </div>
    )
}

export default TextColorGradient
