import React, { useState } from 'react';
import './ItemCount.css';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa'


export const ItemCount = ({ stock, onAdd }) => {

    const [number, setNumber] = useState(1)

    const add = () => {
        if (number < stock) {
            setNumber(number + 1)
        }
    }
    const substract = () => {
        if ((number <= stock) && (number > 1))
            setNumber(number - 1)
    }

    return (
        <div>
            <div className="count">
                <button className="button" onClick={substract}><FaChevronLeft /> </button>
                <span className="quantity">{number}</span>
                <button className="button" onClick={add}><FaChevronRight /> </button>
            </div>
            <button className="buttonAddCart" onClick={onAdd}>Add to cart</button>
        </div>
    )
}
export default ItemCount
