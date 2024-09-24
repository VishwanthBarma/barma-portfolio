import BackdropGradient from "@/components/global/backdrop-gradient"
import TextColorGradient from "@/components/global/text-color-gradient"
import TextWhiteGradient from "@/components/global/text-white-gradient"
import { FlipWords } from "@/constants/flip-words"
import * as motion from "framer-motion/client"

export default function Home() {
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
                </BackdropGradient>
            </motion.div>
        </div>
    )
}
