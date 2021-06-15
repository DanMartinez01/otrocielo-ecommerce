import React from 'react';
import './NavBar.css';
import '../ItemListContainer/ItemListContainer';
import { CartWidget } from '../CartWidget/CartWidget';
import { MdPerson } from 'react-icons/md';
import { Logo } from '../Logo/Logo'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

export const NavBar = (props) => {
    const { cartNumber, suma, clearAll, quantity } = useContext(CartContext)

    const USER = {
        name: "Dani",
        avatar: <MdPerson fontSize="large" color="black"></MdPerson>
    }

    return (
        <head className="head">
            <Link to='/'> <Logo /> </Link>
            <nav className="navbar">
                <ul className="links">
                    <li className="link"><Link to='/category/Sunglasses'><b>Sunglasses</b></Link></li>
                    <li className="link"><Link to='/category/Earrings'> <b>Earrings</b></Link></li>
                    <li className="link"><Link to='/category/Sale'> <b>Sale!</b></Link></li>
                </ul>
            </nav >
            <div className="right">
                <input type="search" className="search" placeholder="Search"></input>
                <span className="cart">
                    <Link to="/CartView" className="cart-icon"><CartWidget /></Link>
                    <p><b>{quantity}</b></p>
                </span>
                <span className="user">
                    <a className="user-icon"><MdPerson /></a>
                </span>
            </div>
        </head >
    )
}
export default NavBar