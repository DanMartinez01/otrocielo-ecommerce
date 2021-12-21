import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <div className='footerLinks'>
                    <li className='footerLinks'><Link to='/'>Home</Link></li>
                    <li className='footerLinks'><Link to='/category/Sunglasses'>Sunglasses</Link></li>
                    <li className='footerLinks'><Link to='/category/Earrings'>Earrings</Link></li>
                    <li className='footerLinks'><Link to='/category/Sale'>Sale!</Link></li>
                </div>
                <hr />
                <p className='footerBrand' > ©OtroCielo Store 2021</p>
            </div>
        </footer>
    )
}