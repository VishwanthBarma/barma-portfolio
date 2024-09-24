import Heading from "@/components/global/heading"
import { Timeline } from "@/components/ui/timeline"
import { projects } from "@/constants/projects"
import React from "react"

const ProjectsPage = () => {
    return (
        <div className="flex flex-col items-center">
            <Heading>My Projects</Heading>
            <Timeline data={projects} />
        </div>
    )
}

export default ProjectsPage
