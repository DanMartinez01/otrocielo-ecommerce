import '../ItemDetail/ItemDetail.css';
import ItemList from '../../data/ItemList.json'
import { ItemCount } from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

export const ItemDetail = (props, onAdd) => {

    const [showButton, setShowButton] = useState(true)
    const { addToCart } = useContext(CartContext)
    const { add, rest, stock, number, quantity } = useContext(CartContext)

    onAdd = () => {
        addToCart(props.item)
        setShowButton(false)
    }
    return (
        <div>
            <div className="wrapper">
                <div className="product">
                    <div className="card">
                        <img src={props.photo} className="productPhoto"></img>
                        <div className="container" key={props.id} >
                            <p className="productName">SPRING COLLECTION</p>
                            <p className="productName">{props.name}</p>
                            <p className="productPrice"><b>$ {props.price} </b></p>
                            <div>
                                {
                                    showButton ?
                                        (
                                            <ItemCount
                                                stock={stock}
                                                number={number}
                                                add={add}
                                                rest={rest}
                                                onAdd={() => {
                                                    addToCart(props.item)
                                                    setShowButton(false)
                                                }}

                                            />
                                        )
                                        :
                                        (
                                            <div>
                                                <button className="buttonAddCart" onClick={onAdd}>
                                                    <Link to='/CartView'>Go to cart</Link>
                                                </button>
                                            </div>
                                        )
                                }
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        </div >
    )
}

export default ItemDetail