import { Outlet } from "react-router-dom";
import { Header, Fotter } from "../../../components/layOut";

const RootLayout = () => {
    return (
        <>
            <Header />
            <main  >
                <Outlet />
            </main>
            {/* <Fotter />
 */}
        </>
    );
}

export default RootLayout;
