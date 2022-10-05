import React from 'react';
import { BiCart } from 'react-icons/bi';

export const CartWidget = () => {
    return (
        <div>
            <button className="cart-icon" >
                <BiCart fontSize="x-large" color="black" />
            </button>
        </div>
    )

}
export default CartWidget
