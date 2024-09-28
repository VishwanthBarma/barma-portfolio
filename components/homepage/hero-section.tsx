import React from "react"
import BackdropGradient from "../global/backdrop-gradient"
import TextWhiteGradient from "../global/text-white-gradient"
import { FlipWords } from "../ui/flip-words"
import TextColorGradient from "../global/text-color-gradient"
import { HoverBorderGradient } from "../ui/hover-border-gradient"
import { FileDown } from "lucide-react"
import * as motion from "framer-motion/client"
import Resume3DCard from "./resume-3d-card"
import { cn } from "@/lib/utils"

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
                    <TextWhiteGradient className="md:text-6xl text-3xl font-semibold mb-2">
                        Welcome to My Portfolio
                    </TextWhiteGradient>
                    <TextWhiteGradient>
                        <FlipWords
                            className="font-medium md:text-2xl text-xl"
                            words={[
                                "Explore My Work",
                                "Discover My Latest Projects",
                                "Uncover My Key Achievements",
                            ]}
                        />
                    </TextWhiteGradient>
                    <TextWhiteGradient className="mt-6 md:text-2xl text-lg font-medium text-center">
                        A Showcase of Innovation, Code, and Passion for
                    </TextWhiteGradient>
                    <TextColorGradient className="font-extrabold md:text-3xl text-xl w-fit">
                        Software Development Engineering
                        <div
                            className={cn(
                                "absolute rounded-full radial--blur3 -z-10 w-48 h-12 -top-5 left-1/2 transform -translate-x-1/2 opacity-80",
                            )}
                        />
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
