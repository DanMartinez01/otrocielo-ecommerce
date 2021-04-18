import './NavBar.css';
function NavBar() {
    const handleLogo = () => alert('Welcome!')
    return (
        <head className="head">
            <h3 className="logo" onClick={handleLogo}>OtroCielo Store</h3>
            <nav className="navbar">
                <ul className="links">
                    <li className="link"><a href="#">Home</a></li>
                    <li className="link"><a href="#">Productos</a></li>
                    <li className="link"><a href="#">Sale!</a></li>
                    <li className="link"><a href="#">Contacto</a></li>
                </ul>
            </nav >
            <input type="search" className="search" placeholder="Search"></input>
        </head>
    )
}
export default NavBar