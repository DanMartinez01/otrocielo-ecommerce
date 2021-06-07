import React, { useState } from 'react';
import './ItemCount.css';


export const ItemCount = ({stock, quantity, onAdd}) => {

 const [number, setNumber] = useState(1)
//traer stock

 const add = () => {
        if (number < stock) {
            setNumber(number + 1)
        }
        console.log('stock', stock)
    }
    const rest = () => {
        if ((number <= stock) && (number > 1))
            setNumber(number - 1)
    }

    return (
        <div>
            <div><p>Stock: {stock}</p> </div>
            <div className="count">
                <button className="button" onClick={rest}>-</button>
                <span className="quantity">{number}</span>
                <button className="button" onClick={add}>+</button>
            </div>
            <button className="buttonAddCart" onClick={onAdd}>Add {quantity} to cart</button>
        </div>
    )
}
export default ItemCount
