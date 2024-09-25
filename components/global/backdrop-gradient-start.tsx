import { cn } from "@/lib/utils"

type Props = {
    children: React.ReactNode
    className?: string
}

const BackdropGradientStart = ({ children, className }: Props) => {
    return (
        <div className={cn("relative w-full flex flex-col items-center")}>
            <div
                className={cn(
                    "absolute rounded-[50%] radial--blur -z-10",
                    className,
                )}
            />
            {children}
        </div>
    )
}

export default BackdropGradientStart
