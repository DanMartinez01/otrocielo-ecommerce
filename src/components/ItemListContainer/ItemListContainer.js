import React from 'react';
import './ItemListContainer.css';
import { Item } from '../Item/Item';
import CarouselComponent from '../Carousel/CarouselComponent';


const ItemListContainer = (props) => {

    return (
        <div >
            <CarouselComponent />
            <div className='collectionTitle'>
                <h1 className='newCollection'><span>Our collection</span></h1>
            </div>
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