import Heading from "@/components/global/heading"
import { Timeline } from "@/components/ui/timeline"
import { projects } from "@/constants/projects"
import React from "react"
import * as motion from "framer-motion/client"

const ProjectsPage = () => {
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
                <Heading>My Projects</Heading>
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
                className="w-full"
            >
                <Timeline data={projects} />
            </motion.div>
        </div>
    )
}

export default ProjectsPage
