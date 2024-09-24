import BackdropGradient from "@/components/global/backdrop-gradient"
import TextWhiteGradient from "@/components/global/text-white-gradient"

export default function Home() {
    return (
        <div className="pt-32">
            <BackdropGradient className="h-20 w-60 opacity-60">
                <TextWhiteGradient className="text-6xl font-semibold">
                    Welcome to My Portfolio
                </TextWhiteGradient>
                <TextWhiteGradient className="mt-4 text-2xl font-medium text-center">
                    A Showcase of Innovation, Code,<br></br> and Passion for
                    Software Development Engineering
                </TextWhiteGradient>
            </BackdropGradient>
        </div>
    )
}
