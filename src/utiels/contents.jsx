import { CiDark } from "react-icons/ci"
import { MdOutlineWbSunny } from "react-icons/md"
import { IoDesktop } from "react-icons/io5";

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