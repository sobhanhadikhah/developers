import { Button, Logo } from "../../elements";
import { auth, provider } from "../../../firebase/config"
import { signInWithPopup, signOut } from "firebase/auth"
import { useSelector } from "react-redux";
import { CgDarkMode } from "react-icons/cg"
import { CiSettings, } from "react-icons/ci";
import { useState } from "react";
import { DropDownMenu, HeaderButton, } from "./components";
import { darkModeOptions, dropDownMenuContent } from "../../../utiels/contents";


function Header({ theme, setTheme }) {
    const isAuth = useSelector(state => state.weblog.auth)
    const [menuToggle, setMenuToggle] = useState(false);
    const [darkModeToggle, setDarkModeToggle] = useState(false);
    function handleOnDarkMode() {
        setDarkModeToggle(!darkModeToggle)
        setMenuToggle(false)
    }
    function handleOnToggle() {
        setMenuToggle(!menuToggle);
        setDarkModeToggle(false)
    }
    function handleOnLogin() {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result);
            const { user } = result
            console.log(user);
            localStorage.setItem("isAuth", true)
            window.location = "/";
        })
        setMenuToggle(!menuToggle)

    }
    function handleOnLogout() {
        signOut(auth).then((result) => {
            console.log(result);
            localStorage.setItem("isAuth", false)
            window.location = "/";
        })
        setMenuToggle(!menuToggle)

    }
    return (
        <header className="sticky top-0 z-50 text-white bg-white shadow-md dark:bg-black dark:bg-opacity-5 bg-opacity-30 backdrop-filter backdrop-blur-lg font-sanst-semibold " >
            <div className=" lg:h-[98px] h-[68px]  flex items-center  max-w-2xl mx-auto " >
                <h3 className="items-center justify-center w-full text-center text-black lg:text-left" >
                    <Logo />
                </h3>

                <div className="flex flex-col items-center justify-center text-center"  >
                    <ul>
                        <div className="items-center hidden space-x-3 lg:flex">
                            <HeaderButton onClick={handleOnDarkMode}  >
                                <CgDarkMode size={20} />
                            </HeaderButton>

                            <HeaderButton onClick={handleOnToggle}>
                                <CiSettings size={20} />
                            </HeaderButton>
                        </div>
                    </ul>
                    {/* optios menu  */}
                    <DropDownMenu animateOnToggle={menuToggle} >
                        {
                            isAuth ?
                                <Button path={"post"} > Post </Button>
                                :
                                null
                        }
                        <button
                            className={`${isAuth ? "text-red-500" : "text-sky-500"}`}
                            onClick={isAuth ? handleOnLogout : handleOnLogin}


                        >
                            {isAuth ? "Logout" : "login"}
                        </button>
                    </DropDownMenu>
                    {/* dark Mode menu */}
                    <DropDownMenu animateOnToggle={darkModeToggle} >
                        {
                            darkModeOptions.map((items) => {
                                return <button
                                    className={`text-xl w-full flex gap-y-6 gap-2 justify-start p-1
                                     ${theme === items.text ? "dark:bg-slate-700 bg-slate-300 rounded-md  " : null}
                                      ${items.text === "light" ? "dark:hover:text-yellow-500 text-yellow-600 " : "hover:text-sky-400"}`}
                                    onClick={() => setTheme(items.text)}
                                    key={items.text}>
                                    {items.icon}
                                    <span className="text-sm" >{items.text}</span>
                                </button>
                            })
                        }
                    </DropDownMenu>
                </div>
            </div>
        </header>
    );
}

export default Header;
