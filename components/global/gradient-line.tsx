import React from "react"

const GradientLine = () => {
    return (
        <span className="absolute bottom-0 left-[1.125rem] h-[2px] w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-white/85 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
    )
}

export default GradientLine
