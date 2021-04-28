import React, { useState, useEffect } from 'react';
import '../ItemListContainer/ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount';
import { ItemList } from '../ItemList/ItemList';

export const Item = () => {
    const [accesorios, setAccesorios] = useState([])

    const getAccesorios = (accesorios) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(accesorios)
            }, 3000)
        })
    }
    useEffect(() => {
        getAccesorios(ItemList).then(result => {
            console.log(result)
            setAccesorios(result)
        })
    }, [])

    return (
        <div className="wrapper">
            {accesorios.map((acc) =>
                <div className="product">
                    <div className="card">
                        <img src={acc.photo} className="productPhoto"></img>
                        <div className="container" key={acc.id}>
                            <p className="productName">SPRING COLLECTION</p>
                            <p className="productName"> {acc.name} </p>
                            <p className="productPrice"><b>$ {acc.price} </b></p>
                            <ItemCount></ItemCount>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Item