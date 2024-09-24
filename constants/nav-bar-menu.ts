export type NavBarMenuProps = {
    id: number,
    label: string,
    path: string,
}

export const NavBarMenu: NavBarMenuProps[] = [
    {
        id: 0,
        label: "Home",
        path: "/",
    },
    {
        id: 1,
        label: "Projects",
        path: "/projects",
    },
    {
        id: 2,
        label: "Skills",
        path: "/skills",
    },
    {
        id: 3,
        label: "Experience",
        path: "/experience",
    },
    {
        id: 4,
        label: "Acheivements",
        path: "/acheivements",
    },
]