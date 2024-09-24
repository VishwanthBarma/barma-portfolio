import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/providers/theme-provider"
import NavBar from "@/components/global/nav-bar"

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Barma's Portfolio",
    description: "It's Barma's Portfolio",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={jakarta.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    disableTransitionOnChange
                >
                    <div className="flex flex-col container">
                        <NavBar />
                        <div className="container py-28">{children}</div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
