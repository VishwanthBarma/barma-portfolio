"use client"
import { useScroll, useTransform, motion } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import Heading from "../global/heading"
import { cn } from "@/lib/utils"
import TextColorGradient from "../global/text-color-gradient"
import Link from "next/link"

interface TimelineEntry {
    title: string
    content: React.ReactNode
    year: string
    link: string
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect()
            setHeight(rect.height)
        }
    }, [data])

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    })

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

    return (
        <div
            className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
            ref={containerRef}
        >
            <div className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-36 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <h3 className="hidden md:flex pt-8 text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                                <Heading>{item.year}</Heading>
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                {item.year}
                            </h3>

                            <div className="flex flex-col justify-start items-start">
                                <div className="relative h-full w-full flex flex-col space-y-3 mb-1">
                                    <div
                                        className={cn(
                                            "absolute rounded-[50%] radial--blur -z-10 h-20 w-40 top-0",
                                        )}
                                    />
                                    <TextColorGradient className="font-bold text-3xl w-fit">
                                        {item.title}
                                    </TextColorGradient>
                                    <Link
                                        href={item.link}
                                        className="bg-white rounded-3xl p-1 px-2 text-neutral-900 w-fit font-medium text-xs"
                                    >
                                        GitHub
                                    </Link>
                                </div>
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}
