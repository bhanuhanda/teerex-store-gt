import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

import './Layout.css'

function LayoutWithHeader() {
    return (
        <div id="layout-wrapper">
            <Header />
            <Outlet />
        </div>
    )
}

export default LayoutWithHeader;
