import './ItemListContainer.css';
// import { NavBar } from '../NavBar/NavBar';
// import { MdPerson } from 'react-icons/md';
import { useState } from 'react';

const ItemListContainer = (props) => {
    const [accesories, setAccesories] = useState([
        {
            name: "Gold shell earrings",
            price: "120",
            photo: "https://asset1.cxnmarksandspencer.com/is/image/mands/Shell-Drop-Earrings-1/SD_01_T06_1014C_S4_X_EC_90?$PDP_IMAGEGRID_1_LG$"
        },
        {
            name: "Gold shell earrings",
            price: "200",
            photo: "https://asset1.cxnmarksandspencer.com/is/image/mands/3-Pack-Resin-Mixed-Hoop-Earrings-Set-1/SD_01_T06_1206D_ZZ_X_EC_90?$PDP_IMAGEGRID_1_LG$"
        },
        {
            name: "Gold shell earrings",
            price: "120",
            photo: "https://asset1.cxnmarksandspencer.com/is/image/mands/3-Pack-Pearl-Effect-Hoop-Earrings-1/SD_01_T06_2076E_S4_X_EC_90?$PDP_IMAGEGRID_1_LG$"
        }
    ])
    const CART = 2
    const greeting = "Welcome!"

    return (
        <div>
            <h3 className="greeting">{greeting}</h3>
            <div>
                {accesories.map((accesorie) => (
                    <div className="product">
                        <card className="card">
                            <p className="productName"> {accesorie.name}  </p>
                            <img src={accesorie.photo} className="productPhoto"></img>
                            <p className="productPrice"> Precio: ${accesorie.price} </p>
                        </card>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ItemListContainer