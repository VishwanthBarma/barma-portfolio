"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import Image from "next/image"
import { NavBarMenu } from "@/constants/nav-bar-menu"

const NavBar = () => {
    const pathname = usePathname()
    return (
        <div
            className={cn(
                "fixed top-0 inset-x-0 container z-50 flex items-center bg-neutral-950 px-6 py-3 pt-5 border-b-2 border-zinc-950 shadow-md shadow-zinc-900/50",
            )}
        >
            <div className="flex items-center container justify-between">
                <Link href={"/"} className="font-bold text-2xl w-2/12">
                    BARMA
                </Link>

                <div className="bg-neutral-800/70 p-1 rounded-lg flex items-center space-x-1 justify-between border-[2px] border-zinc-800/70">
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

                <div className="w-2/12 flex justify-end">
                    <Image
                        width={45}
                        height={45}
                        src={"/avatar/avatar.jpg"}
                        alt="Barma's Image"
                        className="rounded-full border-2 border-zinc-800"
                    />
                </div>
            </div>
        </div>
    )
}

export default NavBar
