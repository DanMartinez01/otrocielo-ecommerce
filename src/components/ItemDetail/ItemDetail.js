import '../ItemDetail/ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const ItemDetail = (props) => {
    const stock = [20]
    const [quantity, setQuantity] = useState(1)
    const [showButton, setShowButton] = useState(true)

    const add = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
        else {
            //algun msj
        }
    }
    const rest = () => {
        if ((quantity <= stock) && (quantity > 1))
            setQuantity(quantity - 1)
    }

    const confirmPurchase = () => {
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
                                        (<ItemCount
                                            stock={stock}
                                            quantity={quantity}
                                            add={add}
                                            rest={rest}
                                            confirmPurchase={confirmPurchase}
                                        />)
                                        :
                                        (<button className="buttonAddCart" onClick={confirmPurchase}><Link to='/cart'>Confirm Purchase</Link> </button>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail