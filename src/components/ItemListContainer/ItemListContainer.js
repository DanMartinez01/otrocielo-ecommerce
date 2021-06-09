import React from 'react';
import './ItemListContainer.css';
import { NavBar } from '../NavBar/NavBar'
import { Item } from '../Item/Item';
import { Footer } from '../Footer/Footer';
import { Carousel } from '../Carousel/Carousel';


const ItemListContainer = (props) => {

    return (
        <div>
            <NavBar />
            <Carousel />
            <Item
                key={props.id}
                id={props.id}
                category={props.category}
                photo={props.photo}
                name={props.name}
                price={props.price}
            />
            <Footer />
        </div>
    )
}

export default ItemListContainer