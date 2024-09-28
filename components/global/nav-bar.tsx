"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from "react"
import Image from "next/image"
import { NavBarMenu } from "@/constants/nav-bar-menu"
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"
import TextColorGradient from "./text-color-gradient"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div
            className={cn(
                "fixed top-0 inset-x-0 z-50 bg-black/30 backdrop-blur-md px-6 py-3 pt-5 border-b-2 border-zinc-950 shadow-md shadow-zinc-900/50",
            )}
        >
            <div className="flex items-center justify-between">
                <Link
                    href={"/"}
                    className="font-bold text-2xl w-6/12 md:w-2/12 text-emerald-500"
                >
                    BARMA
                </Link>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-emerald-500">
                        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>

                <div className="hidden md:flex bg-neutral-800/80 p-1 rounded-lg space-x-1 justify-between border-[2px] border-zinc-950/70">
                    {NavBarMenu.map((menuItem) => {
                        const isActive =
                            menuItem.id === 0
                                ? pathname === menuItem.path
                                : pathname.startsWith(menuItem.path)
                        return (
                            <Link
                                key={menuItem.id}
                                className={`${
                                    isActive
                                        ? "bg-neutral-950 shadow-md shadow-neutral-950/50"
                                        : "hover:bg-neutral-900 text-neutral-500 hover:text-neutral-400"
                                } p-2 rounded-lg text-center text-sm font-medium flex items-center space-x-2`}
                                href={menuItem.path}
                            >
                                <span className="mr-1">{menuItem.icon}</span>
                                {menuItem.label}
                            </Link>
                        )
                    })}
                </div>

                <div className="hidden md:flex w-2/12 justify-end items-center space-x-3">
                    <Link href="https://github.com/VishwanthBarma">
                        <FaGithub size={20} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/vishwanthbarma/">
                        <FaLinkedin size={20} />
                    </Link>
                    <Image
                        width={45}
                        height={45}
                        src={"/avatar/avatar.jpg"}
                        alt="Barma's Image"
                        className="rounded-full border-2 border-emerald-500"
                    />
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden mt-3 flex flex-col bg-neutral-800/80 p-4 rounded-lg space-y-3 border-[2px] border-zinc-950/70">
                    {NavBarMenu.map((menuItem) => {
                        const isActive =
                            menuItem.id === 0
                                ? pathname === menuItem.path
                                : pathname.startsWith(menuItem.path)
                        return (
                            <Link
                                key={menuItem.id}
                                className={`${
                                    isActive
                                        ? "bg-neutral-950 shadow-md shadow-neutral-950/50"
                                        : "hover:bg-neutral-900 text-neutral-500 hover:text-neutral-400"
                                } p-2 rounded-lg text-center text-sm font-medium flex items-center space-x-2`}
                                href={menuItem.path}
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="mr-1">{menuItem.icon}</span>
                                {menuItem.label}
                            </Link>
                        )
                    })}
                    <div className="flex justify-center space-x-3 pt-3 border-t border-neutral-700">
                        <Link href="https://github.com/VishwanthBarma">
                            <FaGithub size={20} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/vishwanthbarma/">
                            <FaLinkedin size={20} />
                        </Link>
                    </div>
                    <div className="flex justify-center items-center space-x-3 pt-3 border-t border-neutral-700">
                        <Image
                            width={30}
                            height={30}
                            src={"/avatar/avatar.jpg"}
                            alt="Barma's Image"
                            className="rounded-full border-2 border-emerald-500"
                        />
                        <TextColorGradient className="font-bold w-fit">
                            VISHWANTH BARMA
                        </TextColorGradient>
                    </div>
                </div>
            )}
        </div>
    )
}

export default NavBar
