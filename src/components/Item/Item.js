import React, { useState, useEffect } from 'react';
import './Item.css';
import ItemList from '../../data/ItemList.json'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount';


export const Item = () => {
    let { categoryId } = useParams()
    const [itemsFiltrados, setItems] = useState([])


    useEffect(() => {
        if (!categoryId) {
            setItems(ItemList)
        }
        else {
            let itemsFiltrados = ItemList.filter((product) => product.category === categoryId)
            setItems(itemsFiltrados)
        }
    }, [categoryId])

    return (
        <div className="wrapper">
            {itemsFiltrados.map((item) =>
                <div className="product">
                    <div className="card">
                        <img src={item.photo} className="productPhoto"></img>
                        <div className="container" key={item.id}>
                            <p className="productName">SPRING COLLECTION</p>
                            <p className="productName"> {item.name} </p>
                            <p className="productPrice"><b>$ {item.price} </b></p>
                            <button className="buttonBuy"><Link to={`/ItemDetailContainer/${item.id}`}>I want it</Link></button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Item

