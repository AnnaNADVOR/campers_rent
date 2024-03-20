import NavBar from "components/NavBar/NavBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <Suspense>
                    <Outlet/>
                </Suspense>
            </main>
        </>
    )
}

export default Layout; 