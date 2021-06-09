import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import { Input } from '../Input/Input';
import { NavBar } from '../NavBar/NavBar';
import { Footer } from '../Footer/Footer';
import '../CartView/CartView.css';
import 'firebase/firestore'
import { getfirestore } from '../../firebase'
export const CartView = () => {
    const { cart, removeFromCart, clearAll, sumTotal, number } = useContext(CartContext)

    const [form, setForm] = useState({ name: '', surname: '', email: '', phone: '' })
    const [order, setOrder] = useState('')

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
        cartOrder()
    }

    const items = cart.map(product => ({ id: product.id, name: product.name }))

    const cartOrder = () => {
        const db = getfirestore()
        const ordersCollection = db.collection('orders')
        const items = cart.map(product => ({ id: product.id, name: product.name }))

        const newOrder = {
            buyer: { name, surname, phone, email },
            items: items,
            date: new Date()

        }

        ordersCollection.add(newOrder).then(({ id }) => {
            setOrder(id)
        })
        alert("Purchase finished succesfully")
    }

    return (
        <div>
            <NavBar />
            { cart.length === 0 ?
                (<div className="cartIsEmpty">
                    <h2 className="emptyCart">You haven't added any items yet...</h2>
                    <Link to="/"><button className="backToShop">Back to shopping</button></Link>
                </div>
                )
                :
                (
                    <div className="cartContainer">
                        <div className="cartCont">
                            <h3 className="order">Your order:</h3>
                            {cart.map((i) =>
                                <div className="productContainer" key={i.id}>
                                    <h5>{i.name} </h5>
                                    <h5>Subtotal: $<b>{i.price} </b> </h5>
                                    <h5>Quantity:<b>{i.quantity}</b> </h5>
                                    <button className="remove" onClick={() => removeFromCart(i.id)}>Remove</button>
                                </div>
                            )}
                            <button className="clear" onClick={() => clearAll(cart.length)}>Clear all</button>
                            <h4 className="total">Total Price: $ {sumTotal(cart)} </h4>
                        </div>
                        <div className="form">
                            <h3>Your info: </h3>
                            {formField.map(({ id, label, type, value }) => (
                                <form className="">

                                    <h4 className="label">{label} </h4>
                                    <Input onChange={handleForm} key={id} id={id} label={label} type={type} value={value}
                                    />
                                </form>
                            ))}
                            <button className="finishPurchase" type="submit" onClick={handleFinish, handleSubmit}>Finish Purchase</button>
                        </div>
                    </div>
                )}
            <Footer />
        </div>
    )
}
export default CartView