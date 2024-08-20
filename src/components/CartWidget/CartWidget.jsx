import './CartWidget.css'
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
return (
    <div className="nav-cart">
        <p><FaShoppingCart></FaShoppingCart> 0</p>
    </div>
    )
}

export default CartWidget