import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
    return (
        <div className="Layout">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
}

export default Layout;