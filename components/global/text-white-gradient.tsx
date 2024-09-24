import React from "react"

type Props = {
    children: React.ReactNode
    className?: String
}

const TextWhiteGradient = ({ children, className }: Props) => {
    return (
        <div
            className={`${className} bg-clip-text text-transparent bg-gradient-to-r from-zinc-400/70 via-white to-zinc-400/70`}
        >
            {children}
        </div>
    )
}

export default TextWhiteGradient
