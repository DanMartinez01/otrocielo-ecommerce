import { useState, useContext } from 'react'
import { CartContext } from '../../context/cartContext';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount'
export const CartView = (props) => {

    const { cart, removeFromCart, clearAll, cartNumber, suma, sumTotal } = useContext(CartContext)
    console.log(cart)

    return (
        <div>
            <h1>Cart</h1>
            {cart.map((i) =>
                <div className="productBox" key={i.id}>
                    <h3>{i[0].name} </h3>
                    <h4>$ {i[0].price} </h4>
                    <h4>{i.quantity}</h4>
                    <button onClick={() => removeFromCart(i[0].id)}>Remove from cart</button>
                </div>
            )
            }
            <div>
                <h3>Total Items: {suma(cartNumber)}</h3>
                <h3>Total Price: $ {sumTotal(cart)} </h3>
            </div>
            {
                cart.length === 0 ?
                    (
                        <Link to="/"><button>Back to shopping</button></Link>
                    )
                    :
                    (
                        <button onClick={() => clearAll(cart.length)}>Clear all items</button>
                    )
            }
        </div >
    )
}
export default CartView