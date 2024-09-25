"use client"
import React from "react"
import BackdropGradient from "../global/backdrop-gradient"
import TextWhiteGradient from "../global/text-white-gradient"
import { FlipWords } from "../ui/flip-words"
import TextColorGradient from "../global/text-color-gradient"
import { HoverBorderGradient } from "../ui/hover-border-gradient"
import { FileDown } from "lucide-react"
import * as motion from "framer-motion/client"

const HeroSection = () => {
    const handleDownloadResume = (
        e: React.MouseEvent<HTMLElement, MouseEvent>,
    ) => {
        e.preventDefault()
    }

    return (
        <div className="pt-32">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <BackdropGradient className="h-20 w-60 opacity-60">
                    <TextWhiteGradient className="text-6xl font-semibold mb-2">
                        Welcome to My Portfolio
                    </TextWhiteGradient>
                    <TextWhiteGradient>
                        <FlipWords
                            className="font-medium text-2xl"
                            words={[
                                "Explore My Work",
                                "Discover My Latest Projects",
                                "Uncover My Key Achievements",
                            ]}
                        />
                    </TextWhiteGradient>
                    <TextWhiteGradient className="mt-6 text-2xl font-medium text-center">
                        A Showcase of Innovation, Code, and Passion for
                        <TextColorGradient className="font-extrabold">
                            Software Development Engineering
                        </TextColorGradient>
                    </TextWhiteGradient>

                    <div className="mt-4">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                            onClick={(e) => handleDownloadResume(e)} // Move the onClick here
                        >
                            <FileDown size={18} />
                            <span className="font-medium">Download Resume</span>
                        </HoverBorderGradient>
                    </div>
                </BackdropGradient>
            </motion.div>
        </div>
    )
}

export default HeroSection
