import React, { useState, useEffect } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getfirestore } from '../../firebase';

export const Item = () => {
    const [isEmpty, setIsEmpty] = useState(false)
    const [item, setItem] = useState([])
    let { categoryId } = useParams()

    useEffect(() => {
        const db = getfirestore()
        const ItemCollection = db.collection('items')
        ItemCollection.get().then(
            (querysnapshot) => {
                if (querysnapshot.size === 0) {
                    setIsEmpty(true)
                }
                const data = querysnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))


                const filteredItems = data.filter(
                    (product) => product.category === categoryId)
                // eslint-disable-next-line 
                {
                    (categoryId) ?
                        (setItem(filteredItems))
                        :
                        (setItem(data))
                }
            })
        window.scrollTo(0, document.body.scrollHeight)

    }, [categoryId])


    return (
        <div className="wrapper">
            {isEmpty ?
                (<p>Loading...</p>)
                :
                (item.map((item) =>
                    <div className="product">
                        <div className="card">
                            <img src={item.photo} className="productPhoto" alt="product"></img>
                            <div className="productContainer" key={item.id}>
                                <p className="itemName">SPRING COLLECTION</p>
                                <p className="itemName"> {item.name} </p>
                                <p className="itemPrice"><b>$ {item.price} </b></p>
                                <button className="buttonBuy"><Link className="buttonBuy" to={`/ItemDetailContainer/${item.id}`}>I want it</Link></button>
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

