import { Outlet } from "react-router-dom";
import { Fotter, Header, NavigitionBar } from "../../../components/layOut";
import { useState } from "react";
import { useDarkMode } from "../../../hooks/useDarkMode";

const RootLayout = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    );
    useDarkMode(theme)
    return (
        <div className="bg-white dark:bg-black" >
            <Header theme={theme} setTheme={setTheme} />
            <main className=""  >
                <Outlet />
            </main>
            <NavigitionBar />
            {/* <Fotter /> */}

        </div>
    );
}

export default RootLayout;
