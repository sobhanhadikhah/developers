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
        <div className="max-w-2xl mx-auto" >
            <div className="p-3 font-mono" >
                <h1>Setting</h1>
            </div>
            <div className="grid items-center place-content-center " >

                <button
                    className={` font-mono ${isAuth ? "text-red-500" : "text-sky-500"}`}
                    onClick={isAuth ? handleOnLogout : handleOnLogin}


                >
                    {isAuth ? <span className="text-xl " >Logout</span> : <span className="flex items-center text-lg gap-x-3 " > Join Us  With Your Goggle Account  <FcGoogle /> </span>}
                </button>
            </div>

        </div>
    )
}

export default SettingPage