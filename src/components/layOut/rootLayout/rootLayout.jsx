import { Outlet } from "react-router-dom";
import { Header, NavigitionBar } from "../../../components/layOut";
import { useState } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";

const RootLayout = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    );
    useDarkMode(theme)
    return (
        <>
            <Header theme={theme} setTheme={setTheme} />
            <main  >
                <Outlet />
            </main>
            <NavigitionBar />
            {/* <Fotter />
 */}
        </>
    );
}

export default RootLayout;
