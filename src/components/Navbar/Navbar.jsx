import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Nabvar = () => {
return (
    <nav className="navbar">
        <div>
            <Link to="/" className="navbar-logo">
                <h1>Street Style</h1>
            </Link>
        </div>
        <div className="navbar-links">
            <ul>
                <li><Link to="/">INICIO</Link></li>

                <li><Link to="/category/Remeras">REMERAS</Link></li>

                <li><Link to="/category/Pantalones">PANTALONES</Link></li>

                <li><Link to="/category/Zapatillas">ZAPATILLAS</Link></li>
            </ul>
        </div>
        <CartWidget/>
    </nav>
    )
}

export default Nabvar