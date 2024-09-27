import React from "react"
import * as motion from "framer-motion/client"
import Heading from "@/components/global/heading"
import TextColorGradient from "@/components/global/text-color-gradient"

const AchievementsPage = () => {
    return (
        <div className="flex flex-col items-center">
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
                <Heading>Achievements</Heading>
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
                className="px-20 pt-10 text-neutral-300 font-semibold flex flex-col space-y-10 xl:w-2/3"
            >
                <div className="flex flex-col space-y-3">
                    <h1>
                        • Reached Pre-Elimination Round of Flipkart-Grid 5.0
                        Hackathon, showcasing ML algorithms and problem-solving
                        skills.
                    </h1>
                    <h1>
                        • Advanced to Pre-Elimination Round in Charcha’23
                        Hack4Change Hackathon, demonstrating technical expertise
                        and innovation.
                    </h1>
                </div>
                <div className="flex flex-col space-y-3">
                    <TextColorGradient className="w-fit text-4xl">
                        Publications
                    </TextColorGradient>
                    <h1 className="">
                        <span className="text-xl">
                            • Enhancing the Raft Consensus Algorithm{" "}
                        </span>

                        <span className="font-normal">
                            | Published a paper on optimizing smart data
                            processing with a cell-based approach using the Raft
                            Consensus algorithm, enhancing the leader election
                            process. | IJIRT Volume 10 Issue 11.
                            <br />
                            <a
                                className="text-sm font-semibold bg-neutral-300 px-3 rounded-xl text-neutral-900 mt-1"
                                href="https://ijirt.org/Article?manuscript=163668"
                            >
                                Paper Link
                            </a>
                        </span>
                    </h1>
                </div>
                <div className="flex flex-col space-y-3">
                    <TextColorGradient className="w-fit text-4xl">
                        Certificates
                    </TextColorGradient>
                    <h1>
                        • JP MORGAN CHASE & CO | Task completion in modifying an
                        existing system and unit testing.
                    </h1>
                    <h1>
                        • WALMART GLOBAL TECH | SWE Virtual Experience Program,
                        Task completion in Cracking the leaked password
                        database.
                    </h1>
                </div>
            </motion.div>
        </div>
    )
}

export default AchievementsPage
