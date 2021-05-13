import React, { useContext } from 'react';
import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import ItemList from '../../data/ItemList.json'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { CartContext } from '../../context/cartContext';

export const ItemDetailContainer = () => {

    const { addToCart } = useContext(CartContext)
    const { id } = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {
        const producto = ItemList.find((item) => item.id === id)
        setItem(producto)
    }, [])


    return (
        <div>
            <NavBar />
            <ItemDetail
                key={item.id}
                photo={item.photo}
                name={item.name}
                price={item.price}
                item={item}
            />
        </div>
    )
}
export default ItemDetailContainer
