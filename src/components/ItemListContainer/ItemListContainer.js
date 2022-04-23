import React from 'react';
import './ItemListContainer.css';
import { Item } from '../Item/Item';
import CarouselComponent from '../Carousel/CarouselComponent';


const ItemListContainer = (props) => {

    return (
        <div>
            <CarouselComponent />
            <Item
                key={props.id}
                id={props.id}
                category={props.category}
                photo={props.photo}
                name={props.name}
                price={props.price}
            />

        </div>
    )
}

export default ItemListContainer