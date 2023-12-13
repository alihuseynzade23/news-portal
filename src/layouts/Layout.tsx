import { Outlet } from "react-router";

function Layout() {
    return (
        <>
            <h1>News Portal</h1>

            <Outlet />
        </>
    );
}

export default Layout;
