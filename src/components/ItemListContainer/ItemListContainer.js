import './ItemListContainer.css';
import { NavBar } from '../NavBar/NavBar'
import { Item } from '../Item/Item';
import { Footer } from '../Footer/Footer';
import { Carousel } from '../Carousel/Carousel';
import React, { useState } from 'react';


const ItemListContainer = (props) => {

    return (
        <div>
            <NavBar />
            <Carousel />
            <Item
                key={props.id}
                category={props.category}
                photo={props.photo}
                name={props.name}
                price={props.price}

            //llamar a onAdd

            />
            <Footer />
        </div>
    )
}

export default ItemListContainer