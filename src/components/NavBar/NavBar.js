import './NavBar.css';
import '../ItemListContainer/ItemListContainer';
import { CartWidget } from '../CartWidget/CartWidget'
import { MdPerson } from 'react-icons/md'

export const NavBar = (props) => {
    const handleLogo = () => alert('Welcome!')
    const USER = {
        name: "Dani",
        avatar: <MdPerson></MdPerson>
    }
    return (
        <head className="head">
            <h3 className="logo" onClick={handleLogo}>OtroCielo Store</h3>
            <nav className="navbar">
                <ul className="links">
                    <li className="link"><a href="">Home</a></li>
                    <li className="link"><a href="">Productos</a></li>
                    <li className="link"><a href="">Sale!</a></li>
                    <li className="link"><a href="">Contacto</a></li>
                </ul>
            </nav >
            <div className="right">
                <input type="search" className="search" placeholder="Search"></input>


                <span className="cart">
                    <a> <CartWidget /></a>
                    <p>{props.cartQuantity}</p>
                </span>
                <span className="user">
                    <a>  <MdPerson /> </a>
                    <p>{props.user}</p>
                </span>
            </div>



        </head >
    )
}
export default NavBar