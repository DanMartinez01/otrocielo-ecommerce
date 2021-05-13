import React, { useState } from 'react';
import './ItemCount.css';


export const ItemCount = ({ add, rest, stock, number, onAdd, quantity }) => {

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
