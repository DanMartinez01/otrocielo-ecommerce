import './ItemDetailContainer.css';
import NavBar from '../NavBar/NavBar';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getfirestore } from '../../firebase/';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    let { id } = useParams()

    useEffect(() => {
        const db = getfirestore()
        const itemCollection = db.collection("items")
        const item = itemCollection.doc(id)

        item.get()
            .then((doc) => {
                setItem({ id: doc.id, ...doc.data() })
            }).catch(
                (error) => console.error("Firestore error", error)
            )
    }, [id])

    return (
        <div>
            <NavBar />
            <ItemDetail
                props={item}
            />
        </div>
    )
}
export default ItemDetailContainer
