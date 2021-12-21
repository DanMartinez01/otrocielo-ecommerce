import React from 'react';
import './ItemCount.css';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa'


export const ItemCount = ({ count, add, substract }) => {

    return (
        <div>
            <div className="count">
                <button className="button" onClick={() => substract(count)}><FaChevronLeft color="white" /> </button>
                <span className="quantity">{count}</span>
                <button className="button" onClick={() => add(count)}><FaChevronRight color="white" /> </button>
            </div>
        </div >
    )
}
export default ItemCount
