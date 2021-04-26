import React, { useState } from 'react';
import './ItemCount.css';

export const ItemCount = (props) => {
    const stock = [20]
    const [quantity, setQuantity] = useState(1)

    const add = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
        else {
            //algun msj
        }
    }
    const rest = () => {
        if ((quantity <= stock) && (quantity > 1))
            setQuantity(quantity - 1)
    }
    return (
        <div>
            <div className="count">
                <button className="button" onClick={rest}>-</button>
                <span className="quantity">{quantity} </span>
                <button className="button" onClick={add}>+</button>
            </div>
            <p>Stock: {stock}</p>
        </div>
    )
}
export default ItemCount
