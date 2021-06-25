import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import { Input } from '../Input/Input';
import { NavBar } from '../NavBar/NavBar';
import { ItemCount } from '../ItemCount/ItemCount';
import { Footer } from '../Footer/Footer';
import { FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { BiCart } from 'react-icons/bi';
import Lottie from 'react-lottie';
import emptyCart from '../../assets/lottie/emptyCart.json';
import '../CartView/CartView.css';
import 'firebase/firestore'
import { getfirestore } from '../../firebase'
export const CartView = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYmid slice'
        }
    }

    const { cart, removeFromCart, clearAll, sumTotal, number, quantity, cartQty } = useContext(CartContext)

    const [form, setForm] = useState({ name: '', surname: '', email: '', phone: '' })
    const [order, setOrder] = useState('')

    const { name, surname, email, phone } = form
    const formField = [
        {
            id: "name",
            label: "Name",
            value: form.name,
            type: "text",
            icon: <FaUser />
        },
        {
            id: "surname",
            label: "Surname",
            value: form.surname,
            type: "text",
            icon: <FaUser />
        },
        {
            id: "email",
            label: "Email",
            value: form.email,
            type: "text",
            icon: <FaEnvelope />
        },
        {
            id: "phone",
            label: "Phone",
            value: form.phone,
            type: "text",
            icon: <FaPhoneAlt />
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
        <div className="body">
            <NavBar />
            {cart.length === 0 ?
                (<div className="cartIsEmpty">
                    <h2 className="cartIsEmpty">You haven't added any items yet...</h2>
                    <Link to="/"><button className="backToShop">Back to shopping</button></Link>
                    <Lottie options={{ animationData: emptyCart, ...defaultOptions }} />
                </div>
                )
                :
                (<div className="row">
                    <div className="col-75">
                        <div className="container">
                            <div className='row'>
                                <div className="row">
                                    <div className="col-50">
                                        <h3>Your info: </h3>
                                        {formField.map(({ id, label, type, value, icon }) => (
                                            <div>
                                                <h4 className="label"><span>{icon}</span> {label}</h4>

                                                <Input className="input" onChange={handleForm}
                                                    key={id} id={id} label={label}
                                                    type={type} value={value}
                                                />
                                            </div>
                                        ))}
                                        <button className="btn" type="submit"
                                            onClick={handleFinish, handleSubmit}>Finish Purchase
                                        </button>
                                    </div>
                                </div>

                                <div className="col-30">
                                    <h3 className="order">Your order <span> <BiCart /></span></h3>
                                    {cart.map((i) =>
                                        <div className="" key={i.id}>
                                            <button className="remove" onClick={() => removeFromCart(i.id)}>
                                                <span><FaTrash /></span>
                                            </button>
                                            <p className="price">{i.name} <span> ({i.quantity})</span></p>
                                            <p className="price">$ {i.price}</p>
                                        </div>
                                    )}
                                    <hr />
                                    <h4 className="total">Total Price: $ {sumTotal(cart)} </h4>
                                    <button className="clear" onClick={() => clearAll(cart.length)}>Clear all</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                )
            }
            <Footer />
        </div >
    )
}
export default CartView