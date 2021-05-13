import { useState, useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'

export const CartView = (clear) => {
    const { item } = useContext(CartContext)
    const { cart } = useContext(CartContext)
    const { removeFromCart } = useContext(CartContext)
    const { quantity } = useContext(CartContext)
    const { number } = useContext(CartContext)
    const { clearAll } = useContext(CartContext)
    // const [showButton, setShowButton] = useState(true)

    clear = () => {
        clearAll(cart)
        // setShowButton(false)
    }

    return (
        <div>
            <h1>Cart</h1>
            {
                cart.map((item) =>
                    <div className="productBox">
                        <h3>{item.name} </h3>
                        <h4>{item.price} </h4>
                        <h4>{number}</h4>
                        <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
                    </div>
                )
            }
            <button onClick={() => clear(cart.length)}>Clear all items</button>
        </div>
    )
}
export default CartView