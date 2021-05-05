import React, { useState } from 'react';
import Item from '../Item/Item';
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
    const onAdd = () => {
        alert('Agregaste ' + quantity + ' item(s) al carrito')
    }
    return (
        <div>
            <div><p>Stock: {stock}</p> </div>
            <div className="count">
                <button className="button" onClick={rest}>-</button>
                <span className="quantity">{quantity} </span>
                <button className="button" onClick={add}>+</button>
            </div>
            <button className="buttonAddCart" onClick={onAdd}>Add to cart</button>
        </div>
    )
}
export default ItemCount
