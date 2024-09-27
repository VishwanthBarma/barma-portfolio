import React from "react"
import { CardBody, CardContainer, CardItem } from "@/components/global/3d-card"
import { TextGenerateEffect } from "../global/text-generate-effect"
import { TypewriterEffectSmooth } from "../global/typewritter-effect"

const Resume3DCard = () => {
    return (
        <div>
            <CardContainer className="inter-var w-[24rem]">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
                    <div className="flex items-end justify-between">
                        <div className="text-[5px]">
                            <CardItem>+91 9441972666</CardItem>
                            <CardItem>VishwanthBarma@gmail.com</CardItem>
                            <CardItem>Hyderabad, Telangana</CardItem>
                        </div>
                        <CardItem className="font-bold">
                            <TypewriterEffectSmooth
                                words={[
                                    { text: "Vishwanth" },
                                    { text: "Barma" },
                                ]}
                            />
                        </CardItem>
                        <div className="text-[5px]">
                            <CardItem>GitHub: VishwanthBarma</CardItem>
                            <CardItem>LinkedIn: VishwanthBarma</CardItem>
                        </div>
                    </div>
                    <hr className="my-1 h-[2px] bg-white rounded-full"></hr>
                    <div>
                        <CardItem className="font-semibold text-[10px]">
                            Education
                        </CardItem>
                        <div className="flex justify-between mt-1">
                            <span className="h-[3px] w-3/5 bg-neutral-100 opacity-60 rounded-full"></span>
                            <span className="h-[3px] w-1/5 bg-neutral-400 opacity-50 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[3px] w-2/5 bg-neutral-100 opacity-60 rounded-full"></span>
                            <span className="h-[3px] w-1/5 bg-neutral-400 opacity-50 rounded-full"></span>
                        </div>
                    </div>
                    <hr className="my-1"></hr>
                    <div>
                        <CardItem className="font-semibold text-[10px]">
                            Technical Experience
                        </CardItem>
                        <div className="flex justify-between mt-1">
                            <CardBody className="mb-[-378px]">
                                <TextGenerateEffect words="Web and Branding Committee, CBIT"></TextGenerateEffect>
                            </CardBody>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-[2px]">
                            <span className="h-[2px] w-2/6 mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-[2px]">
                            <span className="h-[2px] w-4/6 mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>

                        <div className="flex justify-between mt-1">
                            <CardBody className="mb-[-378px]">
                                <TextGenerateEffect words="Swecha Telangana"></TextGenerateEffect>
                            </CardBody>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[2px] w-5/6 mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-[2px]">
                            <span className="h-[2px] w-3/6 mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-[2px]">
                            <span className="h-[2px] w-1/4 mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                    </div>
                    <hr className="my-1"></hr>
                    <div>
                        <CardItem className="font-semibold text-[10px]">
                            Skills
                        </CardItem>
                        <div className="flex justify-between mt-1">
                            <span className="h-[3px] w-1/6 bg-neutral-100 opacity-60 rounded-full"></span>
                            <span className="h-[3px] w-1/6 bg-neutral-400 opacity-50 rounded-full"></span>
                            <span className="h-[3px] w-1/6 bg-neutral-100 opacity-60 rounded-full"></span>
                            <span className="h-[3px] w-1/6 bg-neutral-400 opacity-50 rounded-full"></span>
                            <span className="h-[3px] w-1/6 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[3px] w-1/6 bg-neutral-400 opacity-50 rounded-full"></span>
                            <span className="h-[3px] w-1/6 bg-neutral-100 opacity-60 rounded-full"></span>
                            <span className="h-[3px] w-1/6 bg-neutral-400 opacity-50 rounded-full"></span>
                            <span className="h-[3px] w-2/6 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-start mt-1">
                            <span className="h-[3px] w-2/6 bg-neutral-400 opacity-50 rounded-full mr-3"></span>
                            <span className="h-[3px] w-1/6 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                    </div>
                    <hr className="my-1"></hr>
                    <div>
                        <CardItem className="font-semibold text-[10px]">
                            Projects
                        </CardItem>
                        <div className="flex justify-start mt-1 items-center">
                            <span className="h-[4px] w-[4px] mr-1 bg-neutral-100 rounded-full"></span>
                            <CardBody className="mb-[-378px]">
                                <TextGenerateEffect words="ResumeAI- (Next.js 14, Gemini API, Typescript, React, Zustand, Clerk, FireBase)"></TextGenerateEffect>
                            </CardBody>
                            <span className="h-[3px] w-1/6 bg-neutral-100 opacity-70 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-[2px]">
                            <span className="h-[2px] w-2/6 mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-[2px]">
                            <span className="h-[2px] w-4/6 mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>

                        <div className="flex justify-between mt-1">
                            <span className="h-[4px] w-[4px] mr-1 bg-neutral-100 rounded-full"></span>
                            <CardBody className="mb-[-378px]">
                                <TextGenerateEffect words="TicketGalaxy- (Typescript, React, Next.js, TailwindCSS, Redux, Supabase, PostgreSQL)"></TextGenerateEffect>
                            </CardBody>
                            <span className="h-[3px] w-1/6 bg-neutral-100 opacity-70 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[2px] w-1/4 mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-[2px]">
                            <span className="h-[2px] w-3/6 mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-[2px]">
                            <span className="h-[2px] w-1/4 mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[4px] w-[4px] mr-1 bg-neutral-100 rounded-full"></span>
                            <CardBody className="mb-[-378px]">
                                <TextGenerateEffect words="ProductsGrid- (Javascript, React, React Context, Python, Flask, ML Algorithms)"></TextGenerateEffect>
                            </CardBody>
                            <span className="h-[3px] w-1/6 bg-neutral-100 opacity-70 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-[2px]">
                            <span className="h-[2px] w-2/6 mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-[2px]">
                            <span className="h-[2px] w-4/6 mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>

                        <div className="flex justify-between mt-1">
                            <span className="h-[4px] w-[4px] mr-1 bg-neutral-100 rounded-full"></span>
                            <CardBody className="mb-[-378px]">
                                <TextGenerateEffect words="WeatherForecastingApp- (React Native, OpenWheatherMap API, Redux, Expo)"></TextGenerateEffect>
                            </CardBody>
                            <span className="h-[3px] w-1/6 bg-neutral-100 opacity-70 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[2px] w-5/6 mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-[2px]">
                            <span className="h-[2px] w-3/6 mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[2px] w-full mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-[2px]">
                            <span className="h-[2px] w-1/4 mx-3 bg-neutral-100 opacity-60 rounded-full"></span>
                        </div>
                    </div>
                    <hr className="my-1"></hr>
                    <div>
                        <CardItem className="font-semibold text-[10px]">
                            Certifications
                        </CardItem>
                        <div className="flex justify-between mt-1">
                            <CardBody className="mb-[-378px]">
                                <TextGenerateEffect words="•JP MORGAN CHASE & CO | Task completion in modifying an existing system and unit testing."></TextGenerateEffect>
                            </CardBody>
                            <span className="h-[3px] w-1/12 bg-neutral-400 opacity-50 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <CardBody className="mb-[-378px]">
                                <TextGenerateEffect words="•WALMART GLOBAL TECH | SWE Virtual Experience Program."></TextGenerateEffect>
                            </CardBody>
                            <span className="h-[3px] w-1/12 bg-neutral-400 opacity-50 rounded-full"></span>
                        </div>
                    </div>
                    <hr className="my-1"></hr>
                    <div>
                        <CardItem className="font-semibold text-[10px]">
                            Achievements
                        </CardItem>
                        <div className="flex justify-between mt-1">
                            <span className="h-[3px] w-1 mr-1 bg-neutral-100 opacity-90 rounded-full"></span>
                            <span className="h-[3px] w-full bg-neutral-400 opacity-50 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1 ml-2">
                            <span className="h-[3px] w-6/12 bg-neutral-400 opacity-50 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[3px] w-1 mr-1 bg-neutral-100 opacity-90 rounded-full"></span>
                            <span className="h-[3px] w-full bg-neutral-400 opacity-50 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1 ml-2">
                            <span className="h-[3px] w-full bg-neutral-400 opacity-50 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1 ml-2">
                            <span className="h-[3px] w-2/12 bg-neutral-400 opacity-50 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[3px] w-1 mr-1 bg-neutral-100 opacity-90 rounded-full"></span>
                            <span className="h-[3px] w-full bg-neutral-400 opacity-50 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1 ml-2">
                            <span className="h-[3px] w-8/12 bg-neutral-400 opacity-50 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="h-[3px] w-1 mr-1 bg-neutral-100 opacity-90 rounded-full"></span>
                            <span className="h-[3px] w-full bg-neutral-400 opacity-50 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1 ml-2">
                            <span className="h-[3px] w-full bg-neutral-400 opacity-50 rounded-full"></span>
                        </div>
                        <div className="flex justify-between mt-1 ml-2">
                            <span className="h-[3px] w-3/12 bg-neutral-400 opacity-50 rounded-full"></span>
                        </div>
                    </div>
                </CardBody>
            </CardContainer>
        </div>
    )
}

export default Resume3DCard
