import { useState, createContext, useEffect } from 'react';
import ItemCount from '../components/ItemCount/ItemCount';
import { Item } from '../components/Item/Item'

export const CartContext = createContext()
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [number, setNumber] = useState(1)
    const stock = 20
    const [cartNumber, setCartNumber] = useState([])


    const add = () => {
        if (number < stock) {
            setNumber(number + 1)
        }
    }
    const rest = () => {
        if ((number <= stock) && (number > 1))
            setNumber(number - 1)
    }

    const isInCart = item => cart.find(product => product.id === item.id)

    const addToCart = (item, quantity) => {
        if (isInCart(item)) {
            setNumber(item.quantity = number)
            setCart([...cart, item])
        }
        else {
            item.quantity = quantity
            setCart([...cart, { ...item }])
            console.log(item.id)
            console.log(cart)
        }
        setCart([...cart, { ...item }])
        console.log(cart)
    }


    const sumNumbers = (number) => {
        setCartNumber([...cartNumber, number])
        console.log(cartNumber)
    }
    const sumTotal = (cart) => {
        const total = cart.reduce((t, product) =>
            t += (product.price * product.quantity), 0
        ).toFixed(2)
        return total
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => item.id !== id)
        setCart(newCart)
        console.log(id)
    }

    const suma = (cartNumber) => {
        return cartNumber.reduce((a, b) => a + b, 0)
    }

    useEffect(() => {
        setQuantity(cart.length)
    }, [cart])


    const clearAll = (cart) => {
        cart = []
        setCart(cart)
        setCartNumber([0])
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, quantity, add, rest, number, clearAll, sumNumbers, cartNumber, suma, sumTotal }}>
            {children}
        </CartContext.Provider>
    )
}
