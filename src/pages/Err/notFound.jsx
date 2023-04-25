import { Button } from "../../components/elements";


function NotFound() {
    return (
        <div className="grid h-screen gap-12 text-center place-content-center" >
            <h3 className="tracking-widest" >
                Error 404
            </h3>
            <Button path={"/"} >Back To Home</Button>
        </div>
    );
}

export default NotFound;
