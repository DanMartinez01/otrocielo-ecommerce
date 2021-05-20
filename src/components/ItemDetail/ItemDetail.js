import '../ItemDetail/ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';
import { getfirestore } from '../../firebase/'

export const ItemDetail = (props) => {
    const [showButton, setShowButton] = useState(true)
    const { addToCart, add, rest, stock, number, sumNumbers } = useContext(CartContext)

    const onAdd = () => {
        addToCart(props.item)
        setShowButton(false)
        sumNumbers(number)
    }
    let { id } = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {
        const db = getfirestore()
        const ItemCollection = db.collection('items')
        const product = ItemCollection.doc(id)
        console.log(product)

        product.get().then(
            (querysnapshot) => {
                const data = querysnapshot.data()
                setItem(data)
            })
    }, [])
    console.log(item)

    return (
        <div>
            <div className="wrapper">
                <div className="product">
                    <div className="card">
                        <img src={item.photo} className="productPhoto"></img>
                        <div className="container" key={item.id} >
                            <p className="productName">SPRING COLLECTION</p>
                            <p className="productName">{item.name}</p>
                            <p className="productPrice"><b>$ {item.price} </b></p>
                            <div>
                                {showButton ?
                                    (<ItemCount
                                        stock={stock}
                                        number={number}
                                        add={add}
                                        rest={rest}
                                        onAdd={() => { onAdd() }}
                                    />)
                                    : (<div>
                                        <button className="buttonAddCart">
                                            <Link to='/CartView'>Go to cart</Link>
                                        </button>
                                    </div>)}
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        </div >
    )
}

export default ItemDetail