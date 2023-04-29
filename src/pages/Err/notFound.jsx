import { Button } from "../../components/elements";
import useTitle from "../../hooks/useTitle";


function NotFound() {
    useTitle("404")
    return (
        <div className="grid h-screen gap-12 text-center place-content-center" >
            <h3 className="tracking-widest dark:text-white " >
                Error 404
            </h3>
            <Button path={"/"} >Back To Home</Button>
        </div>
    );
}

export default NotFound;
