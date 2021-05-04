import React from 'react';
import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import { ItemList } from '../ItemList/ItemList';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
    const { id } = useParams()
    const [accesorios, setAccesorios] = useState([])

    useEffect(() => {
        const producto = ItemList(id).find((accesorios) => accesorios.id === id)
        setAccesorios(producto)
    }, [])

    return (
        <div>
            <NavBar />
            <ItemDetail
                key={accesorios.id}
                photo={accesorios.photo}
                name={accesorios.name}
                price={accesorios.price}
            />
        </div>
    )

}
export default ItemDetailContainer
