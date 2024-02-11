import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function LayoutWithHeader() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default LayoutWithHeader;
