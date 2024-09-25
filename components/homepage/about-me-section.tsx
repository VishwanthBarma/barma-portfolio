import React from "react"
import Heading from "../global/heading"
import GlassCard from "../global/glass-card"

const AboutMeSection = () => {
    return (
        <div className="flex flex-col w-full">
            <Heading>About Me</Heading>
            <GlassCard className="w-2/4">
                <p className="text-center text-neutral-500">
                    I am an active and experienced Software Engineer expertised
                    in Full Stack Developement with a strong foundation in web
                    technology and extensive hands-on experience in scalable
                    applications. My skills span across programming languages,
                    databases, and frameworks, including Java, Python,
                    Javascript, Typescript, Next.js, React.js, Node.js, and
                    GraphQL, I have been able to successfully deliver amazing
                    projects like TicketGalaxy and ProductsGrid, demonstrating
                    my ability to develop complex solutions from inception to
                    deployment with technical expertise and problem-solving
                    about all practical knowledge incorporated I look forward to
                    use my skills effectively helping real-time projects,
                    innovative high quality progressive solutions.
                </p>
            </GlassCard>
        </div>
    )
}

export default AboutMeSection
