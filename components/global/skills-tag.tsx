import React from "react"

type Props = {
    skill: string
}

const SkillsTag = ({ skill }: Props) => {
    return (
        <div className="px-4 py-1 bg-neutral-900 text-neutral-300 rounded-xl font-medium text-sm border-[2px] border-neutral-800/60">
            {skill}
        </div>
    )
}

export default SkillsTag
