import { Link } from "react-router-dom";
import { FiList, FiShoppingCart } from "react-icons/fi";

import './Header.css';

function Header() {
    return (
        <div id="header-container">
            <div id="site-logo">
                TeeRex Store
            </div>
            <div id="nav-links">
                <div id="products-button">
                    <Link to='/' className="link-active">Products{' '}<FiList /></Link>
                </div>
                <div id="cart-button">
                    <Link to='/cart'>Cart{' '}<FiShoppingCart /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
