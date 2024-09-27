import React from "react"
import * as motion from "framer-motion/client"
import Heading from "@/components/global/heading"
import TextColorGradient from "@/components/global/text-color-gradient"
import {
    CourseWork,
    SoftSkills,
    TechnicalSkills,
    WebDevelopmentSkills,
} from "@/constants/skills"
import SkillsTag from "@/components/global/skills-tag"

const SkillsPage = () => {
    return (
        <div className="px-20 xl:px-40">
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
                <Heading>My Skills</Heading>
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
                className="flex flex-col space-y-10 pt-10"
            >
                <div className="flex flex-col space-y-4">
                    <TextColorGradient className="w-fit font-bold text-3xl">
                        Technical Skills
                    </TextColorGradient>
                    <div className="flex flex-wrap gap-2">
                        {TechnicalSkills.map((item, index) => (
                            <SkillsTag skill={item} key={index} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <TextColorGradient className="w-fit font-bold text-3xl">
                        Web Development
                    </TextColorGradient>
                    <div className="flex flex-wrap gap-2">
                        {WebDevelopmentSkills.map((item, index) => (
                            <SkillsTag skill={item} key={index} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <TextColorGradient className="w-fit font-bold text-3xl">
                        Course Work
                    </TextColorGradient>
                    <div className="flex flex-wrap gap-2">
                        {CourseWork.map((item, index) => (
                            <SkillsTag skill={item} key={index} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <TextColorGradient className="w-fit font-bold text-3xl">
                        Soft Skills
                    </TextColorGradient>
                    <div className="flex flex-wrap gap-2">
                        {SoftSkills.map((item, index) => (
                            <SkillsTag skill={item} key={index} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default SkillsPage
