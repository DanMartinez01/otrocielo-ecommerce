import { useState, createContext, useEffect } from 'react';
import ItemCount from '../components/ItemCount/ItemCount';
import { Item } from '../components/Item/Item'


export const CartContext = createContext()
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [number, setNumber] = useState(1)
    const stock = 20
    const [cartNumber, setCartNumber] = useState([0])
    const [item, setItem] = useState([])

    const add = () => {
        if (number < stock) {
            setNumber(number + 1)
        }
    }
    const rest = () => {
        if ((number <= stock) && (number > 1))
            setNumber(number - 1)
    }

    const isInCart = (id) => {
        return cart.find((item) => id === item.id)

    }
    console.log(cart)

    const addToCart = (item) => {
        if (isInCart(item.id)) {
            setNumber(item.quantity = number)
        }
        else {
            item.quantity = number
            setCart([...cart, item])
        }
    }

    const sumNumbers = (number) => {
        setCartNumber([...cartNumber, number])
        console.log(cartNumber)
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => item.id !== id)
        setCart(newCart)
    }

    const suma = (cartNumber) => {
        return cartNumber.reduce((a, b) => a + b, 0)
    }
    console.log(suma(cartNumber))

    useEffect(() => {
        setQuantity(cart.length)
    }, [cart])


    const clearAll = (cart) => {
        cart = []
        setCart(cart)
        setCartNumber([0])
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, quantity, add, rest, number, clearAll, sumNumbers, cartNumber, suma }}>
            {children}
        </CartContext.Provider>
    )
}
