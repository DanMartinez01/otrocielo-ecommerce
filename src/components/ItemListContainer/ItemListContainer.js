import './ItemListContainer.css';
import { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {
    const [accesories, setAccesories] = useState([
        {
            name: "Gold Shell Earrings",
            price: "120,00",
            photo: "https://asset1.cxnmarksandspencer.com/is/image/mands/Shell-Drop-Earrings-1/SD_01_T06_1014C_S4_X_EC_90?$PDP_IMAGEGRID_1_LG$"
        },
        {
            name: "Gold Shell Earrings",
            price: "200,00",
            photo: "https://asset1.cxnmarksandspencer.com/is/image/mands/3-Pack-Resin-Mixed-Hoop-Earrings-Set-1/SD_01_T06_1206D_ZZ_X_EC_90?$PDP_IMAGEGRID_1_LG$"
        },
        {
            name: "Gold Shell Earrings",
            price: "120,00",
            photo: "https://asset1.cxnmarksandspencer.com/is/image/mands/3-Pack-Pearl-Effect-Hoop-Earrings-1/SD_01_T06_2076E_S4_X_EC_90?$PDP_IMAGEGRID_1_LG$"
        }
    ])
    const CART = 2
    const greeting = "Welcome!"

    return (
        <div>
            {/* <h3 className="greeting">{greeting}</h3> */}

            <div className="wrapper">
                {accesories.map((accesorie) => (
                    <div className="product">
                        <div className="card">
                            <img src={accesorie.photo} className="productPhoto"></img>
                            <div className="container">
                                <p className="productName">SPRING COLLECTION</p>
                                <p className="productName"> {accesorie.name} </p>
                                <p className="productPrice"><b>$ {accesorie.price} </b></p>
                                <ItemCount></ItemCount>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ItemListContainer