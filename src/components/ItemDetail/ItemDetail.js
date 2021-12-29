import '../ItemDetail/ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

export const ItemDetail = ({ props }) => {
    const { addToCart } = useContext(CartContext)
    const [showButton, setShowButton] = useState(true)
    const [quantity, setQuantity] = useState(1)
    const stock = props.stock

    const onAdd = (quantity) => {
        addToCart(props, quantity)
        setQuantity(quantity)
        setShowButton(false)
    }
    const add = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
        else {
            alert("Sorry, we dont have enough stock")
        }
    }
    const substract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="productWrapper">
            <div className="productCard">
                <div className="productDescription">
                    <img src={props.photo} alt="product" className="productPhoto"></img>
                </div>
                <div className="purchaseSection">
                    <p className="productName">{props.name}</p>
                    <p className="sectionText">Section: {props.category}</p>
                    <p className="productPrice"><b>$ {props.price} </b></p>
                    {
                        props.stock === 0 ? (<p>Sin stock</p>) :
                            (<p>disponibles</p>) &&
                                showButton ?
                                (<div className="counter">
                                    <ItemCount
                                        count={quantity}
                                        add={add}
                                        substract={substract}
                                        stock={props.stock}
                                    />
                                    <button className="addToCart" onClick={() => onAdd(quantity)}>Add to cart</button>
                                </div>
                                )
                                :
                                (
                                    <button className="goToCart">
                                        <Link to='/CartView'>Go to cart</Link>
                                    </button>
                                )}
                </div>
            </div>
        </div >
    )
}

export default ItemDetail