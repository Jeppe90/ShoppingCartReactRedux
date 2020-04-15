import React from 'react';
import { NavLink } from 'react-router-dom'

 const Navbar = (props) => {
    return(
            <nav className="nav-wrapper black">
                <div className="container">
                    <NavLink to="/" className="brand-logo">Webshop</NavLink>
                    <ul className="right">
                        <li><NavLink to="/">Products</NavLink></li>
                        <li><NavLink to="/cart">Cart ({props.cartItems.reduce((acc, item) => {
                            return acc + item.quantity
                        }, 0)})</NavLink></li>
                        {/* <li><NavLink to="/cart"><i className="material-icons">shopping_cart</i></NavLink></li> */}
                    </ul>
                </div>
            </nav>  
    )
}


export default Navbar