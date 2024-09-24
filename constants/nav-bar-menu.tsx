import {
    FileClock,
    House,
    PanelsTopLeft,
    Sparkles,
    UserRoundPen,
} from "lucide-react"

export type NavBarMenuProps = {
    id: number
    label: string
    path: string
    icon: JSX.Element
}

export const NavBarMenu: NavBarMenuProps[] = [
    {
        id: 0,
        label: "Home",
        path: "/",
        icon: <House size={16} />,
    },
    {
        id: 1,
        label: "Projects",
        path: "/projects",
        icon: <PanelsTopLeft size={16} />,
    },
    {
        id: 2,
        label: "Skills",
        path: "/skills",
        icon: <Sparkles size={16} />,
    },
    {
        id: 3,
        label: "Experience",
        path: "/experience",
        icon: <UserRoundPen size={16} />,
    },
    {
        id: 4,
        label: "Acheivements",
        path: "/acheivements",
        icon: <FileClock size={16} />,
    },
]
