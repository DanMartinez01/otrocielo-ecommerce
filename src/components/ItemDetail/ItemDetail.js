import '../ItemDetail/ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

export const ItemDetail = ({ props }) => {

    const onAdd = () => {
        addToCart(props, quantity)
        setShowButton(false)
    }
    console.log(props)

    const [showButton, setShowButton] = useState(true)
    const { addToCart, quantity, add, substract, number } = useContext(CartContext)

    return (
        <div>
            <div className="wrapper">
                <div className="product">
                    <div className="card">
                        <div>
                            <img src={props.photo} className="productPhoto"></img>
                            <div className="container" key={props.id} >
                                <p className="productName">SPRING COLLECTION</p>
                                <p className="productName">{props.name}</p>
                                <p className="productPrice"><b>$ {props.price} </b></p>
                            </div>
                        </div>
                        <div>
                            {
                                props.stock === 0 ? (<p>Sin stock</p>) :
                                    (<p>disponibles</p>) &&
                                        showButton ?
                                        (<ItemCount
                                            stock={props.stock}
                                            onAdd={() => { onAdd() }}
                                            add={add}
                                            substract={substract}
                                            number={number}
                                        />)
                                        :
                                        (<div>
                                            <button className="buttonGoCart">
                                                <Link className="buttonGoCart" to='/CartView'>Go to cart</Link>
                                            </button>
                                        </div>)
                            }
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default ItemDetail