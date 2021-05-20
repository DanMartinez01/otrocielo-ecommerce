import React, { useState, useEffect } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/cartContext';
import { getfirestore } from '../../firebase'


export const Item = () => {
    const [isEmpty, setIsEmpty] = useState(false)
    const [item, setItem] = useState([])
    const [categoryExists, setCatExists] = useState(false)
    let { categoryId } = useParams()


    useEffect(() => {
        const db = getfirestore()
        const ItemCollection = db.collection('items')
        console.log(ItemCollection)
        ItemCollection.get().then(
            (querysnapshot) => {
                if (querysnapshot.size === 0) {
                    setIsEmpty(true)
                }
                const data = querysnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                // setItem(data)

                setCatExists(true)
                const filteredItems = data.filter(
                    (product) => product.category === categoryId)
                console.log(filteredItems)
                console.log(categoryId)
                console.log(data)
                {
                    (categoryId) ?
                        (setItem(filteredItems))
                        :
                        (setItem(data))
                }
            })

    }, [categoryId])

    return (
        <div className="wrapper">
            {isEmpty ?
                (<p>Empty</p>)
                :
                (item.map((item) =>
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
                )
                )
            }

        </div>

    )
}

export default Item

