import { useState, useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount'
export const CartView = (clear) => {

    const { cart, removeFromCart, clearAll, cartNumber, suma, resta, quantity, sumTotal } = useContext(CartContext)
    clear = () => {
        clearAll(cart)
    }

    return (
        <div>
            <h1>Cart</h1>

            {cart.map((item) =>
                <div className="productBox">
                    <h3>{item.name} </h3>
                    <h4>$ {item.price} </h4>
                    <h4>{item.quantity}</h4>
                    <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
                </div>
            )
            }
            <div>
                <h3>Total Items: {suma(cartNumber)}</h3>
                <h3>Total Price: $ {sumTotal(cart)} </h3>
            </div>
            { cart.length === 0 ?
                (
                    <Link to="/"><button>Back to shopping</button></Link>
                )
                :
                (
                    <button onClick={() => clear(cart.length)}>Clear all items</button>
                )
            }
        </div>
    )
}
export default CartView