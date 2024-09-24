import React from "react"
import BackdropGradient from "./backdrop-gradient"
import TextWhiteGradient from "./text-white-gradient"

type Props = {
    children: React.ReactNode
}

const Heading = ({ children }: Props) => {
    return (
        <BackdropGradient className="w-28 h-20 opacity-50 -top-10">
            <TextWhiteGradient className="font-bold text-5xl z-10">
                {children}
            </TextWhiteGradient>
        </BackdropGradient>
    )
}

export default Heading
