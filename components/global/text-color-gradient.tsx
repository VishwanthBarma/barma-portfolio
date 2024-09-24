import React from "react"

type Props = {
    children: React.ReactNode
    className?: String
}

const TextColorGradient = ({ children, className }: Props) => {
    return (
        <div
            className={`${className} bg-clip-text text-transparent bg-gradient-to-r from-emerald-600/80 via-emerald-400 to-emerald-600/80`}
        >
            {children}
        </div>
    )
}

export default TextColorGradient
