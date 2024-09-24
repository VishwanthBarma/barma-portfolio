import AboutMeSection from "@/components/homepage/about-me-section"
import Education from "@/components/homepage/education"
import HeroSection from "@/components/homepage/hero-section"

export default function Home() {
    return (
        <div className="flex flex-col space-y-40">
            <HeroSection />
            <AboutMeSection />
            <Education />
        </div>
    )
}
