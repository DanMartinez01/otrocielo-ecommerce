import { useState, useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'
import { Link } from 'react-router-dom';

export const CartView = (clear) => {

    const { cart, removeFromCart, clearAll, cartNumber, suma, resta, quantity } = useContext(CartContext)
    clear = () => {
        clearAll(cart)
    }
    console.log(cart)


    return (
        <div>
            <h1>Cart</h1>

            {cart.map((item) =>
                <div className="productBox">
                    <h3>{item.name} </h3>
                    <h4>{item.price} </h4>
                    <h4>{item.quantity}</h4>
                    {/* <h4>{suma(cartNumber)}</h4> */}
                    <button onClick={() => removeFromCart(item.id)}>Remove from cart</button>
                </div>
            )
            }
            { cart.length === 0 ?
                (
                    // <button onClick={() => clear(cart.length)}>Clear all items</button>
                    <Link to="/"><button>Back to shopping</button></Link>
                )
                :
                (
                    <button onClick={() => clear(cart.length)}>Clear all items</button>
                    // <Link to="/"><button>Back to shopping</button></Link>
                )
            }
        </div>
    )
}
export default CartView