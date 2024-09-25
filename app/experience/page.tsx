import BackdropGradientStart from "@/components/global/backdrop-gradient-start"
import Heading from "@/components/global/heading"
import TextColorGradient from "@/components/global/text-color-gradient"
import { experience } from "@/constants/experience"
import React from "react"
import * as motion from "framer-motion/client"
import GlassCard from "@/components/global/glass-card"

const ExperiencePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-10"
        >
            <Heading>Technical Experience</Heading>
            <div className="flex flex-col space-y-10">
                {experience.map((item, index) => (
                    <BackdropGradientStart
                        key={index}
                        className="flex flex-col space-y-2 h-28 w-60 opacity-30"
                    >
                        <TextColorGradient className="font-bold text-3xl w-fit mb-3">
                            {item.title}
                        </TextColorGradient>

                        <div className="flex space-x-3 items-center mb-3">
                            <h1 className="font-bold text-xl">
                                {item.employee}
                            </h1>
                            <TextColorGradient className="font-extrabold text-xl w-fit">
                                {item.duration}
                            </TextColorGradient>
                            <h1 className="">{item.location}</h1>
                        </div>
                        <GlassCard className="text-neutral-400 xl:w-2/3">
                            {item.content}
                        </GlassCard>
                    </BackdropGradientStart>
                ))}
            </div>
        </motion.div>
    )
}

export default ExperiencePage
