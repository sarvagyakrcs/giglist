import { CreditCard, HomeIcon, Newspaper, Phone } from "lucide-react"
import { LucideIcon } from "lucide-react"

export const NAVBAR_CONSTANTS : {
    id: number,
    label: string,
    path: string,
    section: boolean,
    icon: LucideIcon
}[] = [
    {
        id: 1,
        label: "Home",
        path: "/",
        section: true,
        icon: HomeIcon
    },
    {
        id: 2,
        label: "Contact",
        path: "/contact",
        section: false,
        icon: CreditCard
    },
    {
        id: 3,
        label: "About",
        path: "/about",
        section: false,
        icon: Newspaper
    }
]