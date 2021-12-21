import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <div className='footerLinks'>
                    <li className='footerLinks'><Link to='/'><b>Home</b></Link></li>
                    <li className='footerLinks'><Link to='/category/Sunglasses'><b>Sunglasses</b></Link></li>
                    <li className='footerLinks'><Link to='/category/Earrings'> <b>Earrings</b></Link></li>
                    <li className='footerLinks'><Link to='/category/Sale'> <b>Sale!</b></Link></li>
                </div>
                <hr />
                <p className='footerBrand' > ©OtroCielo Store 2021</p>
            </div>
        </footer>
    )
}