"use client"
import { useOutsideClick } from "@/hooks/use-outside-click"
import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useRef } from "react"
import TextColorGradient from "../global/text-color-gradient"
import TextWhiteGradient from "../global/text-white-gradient"

type Props = {
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    active: boolean
}

const ExpandInfo = ({ active, setActive }: Props) => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false)
            }
        }

        if (active) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }

        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [active, setActive])

    useOutsideClick(ref, () => setActive(false))

    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/30 backdrop-blur-md z-[99]"
                    />

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-[100] px-6 w-full max-w-3xl h-screen rounded-lg shadow-lg overflow-y-auto scrollbar-hide pb-32 pt-20"
                    >
                        <TextWhiteGradient className="font-bold text-4xl w-fit mb-5">
                            More About Me
                        </TextWhiteGradient>
                        <div className="text-neutral-500 leading-relaxed mb-6 flex flex-col space-y-10">
                            <div>
                                <TextColorGradient className="text-2xl font-bold w-fit">
                                    My Motivation
                                </TextColorGradient>
                                <p className="mb-3">
                                    Seeing the majority of live websites on the
                                    internet built with React or Angular, which
                                    are using older libraries, made me realize
                                    the importance of adapting to new
                                    technologies in this ever changing technical
                                    world. So I had to learn Next.js, as it
                                    offers more advantages such as server side
                                    rendering and static site generation, which
                                    optimize websites and enhance security.
                                </p>
                                <p>
                                    I was inspired by the amazing projects and
                                    applications. In today’s AI era, learning
                                    and building anything is within reach,
                                    thanks to detailed documentation and
                                    resources available for every tech stack.
                                    Curiosity drove me to learn Next.js and
                                    improve my skills in web development. The
                                    brilliant developers online who create magic
                                    with their skills have been my greatest
                                    motivation to keep learning and growing in
                                    this field.
                                </p>
                            </div>

                            <div>
                                <TextColorGradient className="text-2xl font-bold w-fit">
                                    Thoughts on Performance in Software
                                    Development
                                </TextColorGradient>
                                <p className="mb-3">
                                    In software engineering, performance is
                                    crucial for any product’s success. To ensure
                                    a product is fast, I focus on key areas like
                                    design principles, clean coding practices,
                                    and continuous optimization. Scalability and
                                    efficiency are essential, so I emphasize
                                    maintaining clear code structures and solid
                                    design patterns. I also prioritize code
                                    reviews, continuous integration, real-time
                                    monitoring, performance metrics, and user
                                    feedback. By consistently applying these
                                    practices, I can ensure that the product
                                    performs well and meets its potential.
                                </p>
                            </div>
                            <div>
                                <TextColorGradient className="text-2xl font-bold w-fit">
                                    Thoughts on Quality in Software Development
                                </TextColorGradient>
                                <p className="mb-3">
                                    In software engineering, ensuring a product
                                    is fast and efficient starts with solid
                                    design principles, clean coding practices,
                                    and ongoing optimization. After delivering
                                    the product to the market, user reviews and
                                    feedback play a crucial role in improving
                                    the product’s quality. To maintain high
                                    performance in production, it’s essential to
                                    implement activity monitoring, real-time
                                    performance metrics, and continuous
                                    integration. Best practices for driving
                                    quality improvements include conducting
                                </p>
                                <p>
                                    Best practices for driving quality
                                    improvements include conducting thorough
                                    code reviews, maintaining well-designed
                                    development strategies, and organizing
                                    regular team meetings. Improving coding
                                    practices, structuring testing processes,
                                    and adhering to strong software engineering
                                    principles are also key. These practices not
                                    only enhance the effectiveness of the
                                    software team but also ensure that the final
                                    product is reliable, scalable, and performs
                                    well in the hands of users.
                                </p>
                            </div>
                            <div>
                                <TextColorGradient className="text-2xl font-bold w-fit">
                                    Thoughts on Key Things in Software
                                    Development
                                </TextColorGradient>
                                <p className="mb-3">
                                    First,{" "}
                                    <span className="font-bold text-neutral-400">
                                        Architecture
                                    </span>{" "}
                                    is critical. A well-designed, clean, and
                                    robust architecture not only ensures that
                                    your application can grow and adapt over
                                    time, but it also makes it easier for others
                                    to understand and contribute to the project.
                                    A modular and organized structure, with
                                    clear separation of concerns, allows for
                                    more straightforward debugging, testing, and
                                    future enhancements.
                                </p>
                                <p className="mb-3">
                                    <span className="font-bold text-neutral-400">
                                        Maintainability
                                    </span>{" "}
                                    is closely tied to how clean and readable
                                    your code is. Writing clear, well-
                                    documented code helps ensure that others can
                                    easily maintain and update the project.
                                    Using consistent coding standards,
                                    meaningful naming conventions, and avoiding
                                    unnecessary complexity are all important
                                    practices. Additionally, employing a
                                    scalable tech stack and keeping dependencies
                                    up-to-date ensures that the project remains
                                    easy to maintain over time.
                                </p>
                                <p>
                                    For{" "}
                                    <span className="font-bold text-neutral-400">
                                        Reliability
                                    </span>
                                    , it’s important to consider every aspect of
                                    the system from the initial design to
                                    deployment. This includes choosing the right
                                    tech stack, database types, and cloud
                                    storage solutions, as well as ensuring that
                                    the libraries and dependencies you use are
                                    stable and well-supported. A reliable system
                                    is one that handles failures gracefully,
                                    scales efficiently under load, and can be
                                    easily monitored and updated. Following
                                    industry best practices and staying informed
                                    about the latest trends and updates in
                                    technology also play a crucial role in
                                    maintaining reliability over time.
                                </p>
                            </div>
                            <div>
                                <TextColorGradient className="text-2xl font-bold w-fit">
                                    Thoughts on Open-Source
                                </TextColorGradient>
                                <p className="mb-3">
                                    I believe open-source software development
                                    is a fantastic way for developers from all
                                    over the world to collaborate and learn. It
                                    provides a great opportunity for educational
                                    growth because anyone with knowledge in a
                                    particular tech stack can contribute to
                                    open- source projects and learn a lot in the
                                    process. Open-source allows developers to
                                    experiment, leading to a variety of software
                                    versions, like the many different Linux
                                    distributions available today.
                                </p>
                                <p>
                                    Although I haven’t been an official
                                    open-source maintainer, I understand the
                                    importance of open-source licenses, like the
                                    GNU Public License (GPL 3.0), which allows
                                    freedom to use, share, and collaborate on
                                    projects. During college, I focused on
                                    building my skills, working on projects,
                                    participating in hackathons, and completing
                                    my final year project. I also contributed to
                                    my friends’ projects, but I haven’t made
                                    significant contributions to real
                                    open-source projects yet. I have explored
                                    platforms like Google Summer of Code, which
                                    involves contributing to open-source
                                    projects.
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setActive(false)}
                            className="absolute top-20 right-5 hover:text-gray-700 font-extrabold text-2xl"
                        >
                            ✕
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ExpandInfo
