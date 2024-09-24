import React from "react"
import BackdropGradient from "./backdrop-gradient"

type Props = {
    children: React.ReactNode
    className: string
}

const GlassCard = ({ children, className }: Props) => {
    return (
        <div
            className={`${className} w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black relative`}
        >
            <span className="absolute top-0 left-[1.125rem] h-[2px] w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-white/85 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            <BackdropGradient className="h-20 w-40 opacity-50 z-10 -top-14">
                {children}
            </BackdropGradient>
        </div>
    )
}

export default GlassCard
