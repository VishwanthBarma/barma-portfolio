import React from "react"
import Heading from "../global/heading"
import GlassCard from "../global/glass-card"

const Education = () => {
    return (
        <div className="flex flex-col px-4">
            <Heading>Education</Heading>
            <GlassCard className="w-min min-w-fit">
                <div className="flex flex-col space-y-5 w-full text-neutral-300">
                    <h1 className="font-extralight text-2xl">
                        Nov 2020 - May 2024{" "}
                        <span className="font-semibold">Graduated</span>
                    </h1>
                    <h1 className="font-bold text-xl">GPA: 8.2/10</h1>
                    <div className="flex flex-col space-y-1">
                        <h1 className="font-semibold text-sm text-neutral-500">
                            College name
                        </h1>
                        <h1 className="font-semibold border-[1px] p-2 px-3 rounded-xl w-fit text-emerald-500">
                            CBIT (Chaitanya Bharathi Institute of Technology)
                        </h1>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="font-semibold text-sm text-neutral-500">
                            Degree
                        </h1>
                        <h1 className="font-semibold border-[1px] p-2 px-3 rounded-xl w-fit">
                            Bachelor of Engineering
                        </h1>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="font-semibold text-sm text-neutral-500">
                            Major
                        </h1>
                        <h1 className="font-semibold border-[1px] p-2 px-3 rounded-xl w-fit">
                            Computer Science and Engineering
                        </h1>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="font-semibold text-sm text-neutral-500">
                            Location
                        </h1>
                        <h1 className="font-semibold border-[1px] p-2 px-3 rounded-xl w-fit">
                            Hyderabad, Telangana, 500075
                        </h1>
                    </div>
                </div>
            </GlassCard>
        </div>
    )
}

export default Education
