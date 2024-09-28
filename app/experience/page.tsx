import BackdropGradientStart from "@/components/global/backdrop-gradient-start"
import Heading from "@/components/global/heading"
import TextColorGradient from "@/components/global/text-color-gradient"
import { experience } from "@/constants/experience"
import React from "react"
import * as motion from "framer-motion/client"
import GlassCard from "@/components/global/glass-card"

const ExperiencePage = () => {
    return (
        <div className="px-10">
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.8,
                    filter: "blur(10px)",
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.4, 0, 0.2, 1],
                }}
            >
                <Heading>Experience</Heading>
            </motion.div>

            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.8,
                    filter: "blur(10px)",
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                }}
                transition={{
                    duration: 1.2,
                    ease: [0.4, 0, 0.2, 1],
                }}
            >
                <div className="flex flex-col space-y-10">
                    {experience.map((item, index) => (
                        <BackdropGradientStart
                            key={index}
                            className="flex flex-col space-y-2 h-28 w-60 opacity-10"
                        >
                            <TextColorGradient className="font-bold text-3xl w-fit mb-3">
                                {item.title}
                            </TextColorGradient>

                            <div className="flex flex-col md:flex-row md:space-x-3 items-center mb-3">
                                <h1 className="font-bold text-xl">
                                    {item.employee}
                                </h1>
                                <TextColorGradient className="font-extrabold text-xl">
                                    {item.duration}
                                </TextColorGradient>
                                <h1 className="font-semibold">
                                    {item.location}
                                </h1>
                            </div>
                            <GlassCard className="text-neutral-400 xl:w-2/3">
                                {item.content}
                            </GlassCard>
                        </BackdropGradientStart>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default ExperiencePage
