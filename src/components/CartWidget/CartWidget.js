import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

export const CartWidget = () => {
    return (
        <div>
            <button>
                <MdAddShoppingCart fontSize="small" color="black" />
            </button>
        </div>
    )

}
export default CartWidget
