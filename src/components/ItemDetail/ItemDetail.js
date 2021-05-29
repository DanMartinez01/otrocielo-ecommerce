import '../ItemDetail/ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { getfirestore } from '../../firebase/'
import Item from '../Item/Item';

export const ItemDetail = (props) => {
    const [showButton, setShowButton] = useState(true)
    const { addToCart, add, rest, stock, number, sumNumbers, suma, cartNumber } = useContext(CartContext)

    const onAdd = () => {
        addToCart(item)
        setShowButton(false)
        suma(cartNumber)
    }
    let { id } = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {
        const db = getfirestore()
        const items = db.collection('items')
        items.get().then((querysnapshot) => {
            const data = querysnapshot.docs.map((doc) => (
                { id: doc.id, ...doc.data() }));

            const filteredItem = data.filter(
                (item) => item.id === id)
            setItem(filteredItem)
        })
    }, [])
    console.log(item)
    return (
        <div>
            <div className="wrapper">
                <div className="product">
                    {item.map((item) =>
                        <div className="card">
                            <img src={item.photo} className="productPhoto"></img>
                            <div className="container" key={item.id} >
                                <p className="productName">SPRING COLLECTION</p>
                                <p className="productName">{item.name}</p>
                                <p className="productPrice"><b>$ {item.price} </b></p>
                            </div>
                        </div>
                    )}
                    <div className="wrapper">
                        {showButton ?
                            (<ItemCount
                                stock={stock}
                                number={number}
                                add={add}
                                rest={rest}
                                onAdd={() => { onAdd() }}
                            />)
                            :
                            (<div>
                                <button className="buttonAddCart">
                                    <Link to='/CartView'>Go to cart</Link>
                                </button>
                            </div>)}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default ItemDetail