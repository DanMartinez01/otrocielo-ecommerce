import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

export const CartWidget = () => {
    return (
        <div>
            <button className="cart-icon" >
                <MdAddShoppingCart fontSize="small" color="black" />
            </button>
        </div>
    )

}
export default CartWidget
