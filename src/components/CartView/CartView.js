import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import { Input } from '../Input/Input';
import 'firebase/firestore'
import * as firebase from 'firebase/firebase'
import { getfirestore } from '../../firebase'
export const CartView = (props) => {

    const { cart, setCart, removeFromCart, clearAll, cartNumber, suma, sumTotal } = useContext(CartContext)

    const [form, setForm] = useState({ name: '', surname: '', email: '', phone: '' })
    const [order, setOrder] = useState('')

    console.log(cart)

    const { name, surname, email, phone } = form
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
            const itemRef = db.collection("items").doc(item.id)
            batch.update(itemRef, { stock: item.stock - item.quantity })
        })
        batch.commit().then((r) => console.log(r))
        setCart([])
        cartOrder()
    }
    const items = cart.map(product => ({ id: product.id, name: product.name }))
    console.log("items", items)

    const cartOrder = () => {
        const db = getfirestore()
        const ordersCollection = db.collection('orders')
        const items = cart.map(product => ({ id: product.id, name: product.name }))

        const newOrder = {
            buyer: { name, surname, phone, email },
            items: items,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        ordersCollection.add(newOrder).then(({ id }) => {
            setOrder(id)
        })
        alert("Purchase finished succesfully")
        console.log(newOrder)
    }

    console.log(order)

    return (
        <div>
            <h1>Cart</h1>
            {cart.map((i) =>
                //sin la posicion [0] no puedo acceder
                <div className="productBox" key={i.id}>
                    <h3>{i[0].name} </h3>
                    <h4>$ {i[0].price} </h4>
                    <h4>{i.quantity}</h4>
                    <button onClick={() => removeFromCart(i[0].id)}>Remove from cart</button>
                </div>
            )
            }
            <div>
                <h3>Total Items: {suma(cartNumber)}</h3>
                <h3>Total Price: $ {sumTotal(cart)} </h3>
            </div>
            {
                cart.length === 0 ?
                    (
                        <Link to="/"><button>Back to shopping</button></Link>
                    )
                    :
                    (
                        <div>
                            {/* mapear form */}
                            {formField.map(({ id, label, type, value }) => (
                                <form>
                                    <Input onChange={handleForm} key={id} id={id} label={label} type={type} value={value}
                                    />
                                </form>

                            ))}
                            <button type="submit" onClick={handleFinish, handleSubmit}>Finish Purchase</button>
                            <div>
                                <button onClick={() => clearAll(cart.length)}>Clear all items</button>
                            </div>
                        </div>
                    )
            }

        </div >
    )
}
export default CartView