import './ItemListContainer.css';
import { Item } from '../Item/Item';


const ItemListContainer = (props) => {
    return (
        <div>
            {/* <h3 className="greeting">{greeting}</h3> */}
            <Item></Item>
        </div>
    )
}

export default ItemListContainer