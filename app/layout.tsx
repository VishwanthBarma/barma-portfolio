import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
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
        <html lang="en" className="dark bg-neutral-950">
            <head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
            </head>
            <body className={`${jakarta.className} dark`}>
                <div className="flex flex-col container">
                    <NavBar />
                    <div className="container py-28">{children}</div>
                </div>
            </body>
        </html>
    )
}
