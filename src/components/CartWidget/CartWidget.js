import React from 'react';
import { BiCart } from 'react-icons/bi';

export const CartWidget = () => {
    return (
        <div>
            <button className="cart-icon" >
                <BiCart fontSize="large" color="black" />
            </button>
        </div>
    )

}
export default CartWidget
