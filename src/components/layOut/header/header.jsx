import { Button, Logo } from "../../elements";
import { auth, provider } from "../../../firebase/config"
import { signInWithPopup, signOut } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../../features/posts/postsSlice";

function Header() {
    const isAuth = useSelector(state => state.weblog.auth)
    const disPatch = useDispatch()
    function handleOnLogin() {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result);
            const { user } = result
            console.log(user);
            disPatch(fetchUser({ user: user }));
            localStorage.setItem("isAuth", true)
            window.location = "/";
        })
    }
    function handleOnLogout() {
        signOut(auth).then((result) => {
            console.log(result);
            disPatch(fetchUser({ user: [] }))
            localStorage.setItem("isAuth", false)
            window.location = "/";
        })
    }
    return (
        <header className="sticky top-0 z-50 font-mono text-white bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg  shadow-md font-sanst-semibold " >
            <div className=" h-[98px]  flex items-center  max-w-2xl mx-auto " >
                <h3 className="w-full text-center text-black lg:text-left" ><Logo /></h3>
                <div>
                    <ul className="flex gap-x-6 " >
                        <div className="items-center hidden space-x-3 lg:flex">
                            <Button
                                onClick={isAuth ? handleOnLogout : handleOnLogin}

                                textColor={"text-black"}
                                transparent
                            >
                                {isAuth ? "Logout" : "login"}
                            </Button>
                            {
                                isAuth ?
                                    <Button path={"post"} > Post </Button>
                                    :
                                    null
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
