import { CiDark } from "react-icons/ci"
import { MdOutlineWbSunny } from "react-icons/md"
import { IoDesktop } from "react-icons/io5";
import { MdExplore } from "react-icons/md"
import { CiSettings, } from "react-icons/ci";
import { IoMdAddCircle } from "react-icons/io"

export const dropDownMenuContent = [

    {
        id: 'post',
        path: "post",
        content: "Post"
    }
]
export const darkModeOptions = [
    {
        text: "light",
        icon: <MdOutlineWbSunny />
    },
    {
        text: "dark",
        icon: <CiDark />
    },
    {
        text: "system",
        icon: <IoDesktop />
    },
]
export const navigitionBarContentIsNotAuth = [
    {
        id: "navExplore",
        title: "Explore",
        path: "/",
        icon: <MdExplore size={30} />

    },
    {
        id: "nav",
        title: "Setting",
        path: "setting",
        icon: <CiSettings size={30} />

    },

];
export const navigitionBarContentIsAuth = [
    {
        id: "navExplore",
        title: "Explore",
        path: "/",
        icon: <MdExplore size={30} />

    },
    {
        id: "navPost",
        title: "Post",
        path: "post",
        icon: <IoMdAddCircle size={30} />

    },
    {
        id: "navSetting",
        title: "Setting",
        path: "/setting",
        icon: <CiSettings size={30} />

    },

];