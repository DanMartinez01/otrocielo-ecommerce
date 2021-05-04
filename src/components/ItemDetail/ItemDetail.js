import '../ItemDetail/ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
export const ItemDetail = (props) => {
    return (
        <div>
            <div className="wrapper">
                <div className="product">
                    <div className="card">
                        <img src={props.photo} className="productPhoto"></img>
                        <div className="container" key={props.id}>
                            <p className="productName">SPRING COLLECTION</p>
                            <p className="productName">{props.name}</p>
                            <p className="productPrice"><b>$ {props.price} </b></p>
                            <ItemCount
                                stock={props.stock}
                            />
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default ItemDetail