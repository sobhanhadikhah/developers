import { useSelector } from "react-redux"
import { auth, provider } from "../../firebase/config";
import { signInWithPopup, signOut } from "firebase/auth";
import { Button } from "../../components/elements/";
import { FcGoogle } from "react-icons/fc";

function SettingPage() {
    const isAuth = useSelector(state => state.weblog.auth)
    function handleOnLogin() {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result);
            const { user } = result
            console.log(user);
            localStorage.setItem("isAuth", true)
            window.location = "/";
        })


    }
    function handleOnLogout() {
        signOut(auth).then((result) => {
            console.log(result);
            localStorage.setItem("isAuth", false)
            window.location = "/";
        })

    }
    return (
        <section className="h-screen bg-black" >

            <div className="max-w-2xl mx-auto " >
                <div className="p-3 font-mono text-xl text-black dark:text-sky-400 " >
                    <h1>Settings</h1>
                    <div className="border-b" />
                </div>
                <div className="flex gap-4 ml-3" >

                    <button
                        className={` font-mono ${isAuth ? "text-red-500" : "text-sky-500"}`}
                        onClick={isAuth ? handleOnLogout : handleOnLogin}


                    >
                        {isAuth ? <span className="text-base " >Logout</span> : <span className="flex items-center text-lg gap-x-3 " > Join Us  With Your Goggle Account  <FcGoogle /> </span>}
                    </button>
                </div>

            </div>
        </section>
    )
}

export default SettingPage