import React, { useContext } from 'react';
import './ItemDetailContainer.css';
import NavBar from '../NavBar/NavBar';
import { ItemDetail } from '../ItemDetail/ItemDetail';


export const ItemDetailContainer = (props) => {

    return (
        <div>
            <NavBar />
            <ItemDetail
                key={props.id}
                photo={props.photo}
                name={props.name}
                price={props.price}
                item={props.item}
                category={props.category}
            />
        </div>
    )
}
export default ItemDetailContainer
