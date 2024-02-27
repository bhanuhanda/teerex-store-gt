import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import './Header.css';

function Header() {
    const { pathname } = useLocation();
    
    return (
        <div id="header-container">
            <div id="site-logo">
                TeeRex Store
            </div>
            <div id="nav-links">
                <div id="products-button">
                    <Link to='/' className={pathname === '/' ? 'link-active' : undefined}>Products</Link>
                </div>
                <div id="cart-button">
                    <Link to='/cart' className={pathname === '/cart' ? 'link-active' : undefined}><FiShoppingCart /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
