"use client"
import React, { useState } from "react"
import Heading from "../global/heading"
import GlassCard from "../global/glass-card"
import TextColorGradient from "../global/text-color-gradient"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import ExpandInfo from "./expand-info"

const AboutMeSection = () => {
    const [showMore, setShowMore] = useState(false)

    return (
        <>
            <div className="flex flex-col w-full justify-center items-center px-4 py-8 md:py-12">
                <Heading>About Me</Heading>
                <div className="w-full md:w-3/4 lg:w-1/2">
                    <GlassCard className="w-full">
                        <TextColorGradient className="mb-2 font-bold text-2xl z-10">
                            VISHWANTH BARMA
                            <div
                                className={cn(
                                    "absolute rounded-full radial--blur3 w-56 h-20 -top-5 left-1/2 transform -translate-x-1/2 opacity-40",
                                )}
                            />
                        </TextColorGradient>
                        <p className="text-center text-sm sm:text-base lg:text-md text-neutral-400 leading-relaxed">
                            I’m an experienced Software Engineer with a strong
                            background in software development and web
                            technologies. My hands-on experience includes
                            building scalable applications and working with a
                            range of programming languages, databases, and
                            frameworks like Java, Python, JavaScript,
                            TypeScript, Next.js, React.js, Node.js, and GraphQL.
                            I’ve led projects such as TicketGalaxy and
                            ProductsGrid, where I was involved in everything
                            from design to deployment. I’m eager to use my
                            skills in both software and web development to
                            contribute to real-world projects and create
                            effective, high-quality solutions.
                        </p>
                        <Button
                            variant={"outline"}
                            className="mt-4 rounded-full"
                            onClick={() => setShowMore(true)}
                        >
                            View More
                        </Button>
                    </GlassCard>
                </div>
            </div>

            <ExpandInfo setActive={setShowMore} active={showMore} />
        </>
    )
}

export default AboutMeSection
