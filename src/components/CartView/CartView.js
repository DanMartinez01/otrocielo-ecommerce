import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import { Input } from '../Input/Input';
import '../CartView/CartView.css';
import 'firebase/firestore'
import * as firebase from 'firebase/firebase'
import { getfirestore } from '../../firebase'
export const CartView = (props) => {

    const { cart, setCart, removeFromCart, clearAll, cartNumber, suma, resta,sumTotal, quantity } = useContext(CartContext)


    const [form, setForm] = useState({ name: '', surname: '', email: '', phone: '' })
    const [order, setOrder] = useState('')

    console.log(cart)

    const { name, surname, email, phone} = form
    const formField = [
        {
            id: "name",
            label: "Name",
            value: form.name,
            type: "text"
        },
        {
            id: "surname",
            label: "Surname",
            value: form.surname,
            type: "text"
        },
        {
            id: "email",
            label: "Email",
            value: form.email,
            type: "email"
        },
        {
            id: "phone",
            label: "Phone",
            value: form.phone,
            type: "text"
        }
    ]

    const handleForm = (id, value) => {
        const newForm = { ...form, [id]: value }
        setForm(newForm)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([name.trim(), surname.trim(), email.trim(), phone.trim()].includes('')) {
            alert("Please complete all the fields")
        }
        else {
            handleFinish()
        }
    }

    const handleFinish = async () => {
        const db = getfirestore()
        const batch = db.batch()

        cart.forEach((item) => {
            const itemRef = db.collection("items").doc(item[0].id)
            batch.update(itemRef, { stock: item[0].stock - item.quantity })
            console.log('stock', item[0].stock, 'item.qty', item.quantity)
        })
        batch.commit().then((r) => console.log(r))
        // setCart([])
        console.log("cart", cart)

        cartOrder()
    }

    const items = cart.map(product => ({ id: product[0].id, name: product[0].name }))
    console.log("items", items)

    const cartOrder = () => {
        const db = getfirestore()
        const ordersCollection = db.collection('orders')
        const items = cart.map(product => ({ id: product[0].id, name: product[0].name }))

        const newOrder = {
            buyer: { name, surname, phone, email },
            items: items,
            date: new Date()

        }
        console.log('items', items)
        console.log("new order", newOrder)
        ordersCollection.add(newOrder).then(({ id }) => {
            setOrder(id)
        })
        alert("Purchase finished succesfully")
        console.log(newOrder)
    }


    return (
        <div className="cartContainer">
            <h2>Check Out</h2>
            {cart.map((i) =>
                //sin la posicion [0] no puedo acceder
                <div className="productBox" key={i.id}>
                    <h4>{i[0].name} </h4>
                    <h4>Subtotal: $ {i[0].price} </h4>
                    <h4>Quantity: {i.quantity}</h4>
                    <button className="finishPurchase" onClick={() => removeFromCart(i[0].id)}>Remove from cart</button>
                </div>
            )
            }
            <div>
                <h3>Total Price: $ {sumTotal(cart)} </h3>
            </div>
            {
                cart.length === 0 ?
                    (
                        <Link to="/"><button className="finishPurchase">Back to shopping</button></Link>
                    )
                    :
                    (
                        <div>
                            <h4>Complete the fields to finish purchase</h4>
                            {formField.map(({ id, label, type, value, placeholder}) => (
                                <form className="formFields">
                                    
                                    <h4 className="label">{label} </h4>
                                    <Input onChange={handleForm} key={id} id={id} label={label} type={type} value={value}
                                    />
                                </form>

                            ))}
                            <button className="finishPurchase" type="submit" onClick={handleFinish, handleSubmit}>Finish Purchase</button>
                            <div>
                                <button className="finishPurchase" onClick={() => clearAll(cart.length)}>Clear all items</button>
                            </div>
                        </div>
                    )
            }

        </div >
    )
}
export default CartView