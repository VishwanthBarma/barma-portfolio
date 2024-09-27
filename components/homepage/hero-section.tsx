import React from "react"
import BackdropGradient from "../global/backdrop-gradient"
import TextWhiteGradient from "../global/text-white-gradient"
import { FlipWords } from "../ui/flip-words"
import TextColorGradient from "../global/text-color-gradient"
import { HoverBorderGradient } from "../ui/hover-border-gradient"
import { FileDown } from "lucide-react"
import * as motion from "framer-motion/client"
import Resume3DCard from "./resume-3d-card"

const HeroSection = () => {
    return (
        <div className="pt-20 xl:pt-10 xl:flex items-center justify-evenly">
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
                    </TextWhiteGradient>
                    <TextColorGradient className="font-extrabold text-2xl w-fit">
                        Software Development Engineering
                    </TextColorGradient>

                    <div className="mt-4">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="a"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                            href="/Vishwanth_Barma_Resume.pdf"
                            download="Vishwanth_Barma_Resume.pdf"
                        >
                            <FileDown size={18} />
                            <span className="font-medium">Download Resume</span>
                        </HoverBorderGradient>
                    </div>
                </BackdropGradient>
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
                <Resume3DCard />
            </motion.div>
        </div>
    )
}

export default HeroSection
