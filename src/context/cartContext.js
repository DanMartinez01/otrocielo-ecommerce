import { useState, createContext, useEffect } from 'react';

export const CartContext = createContext()
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [number, setNumber] = useState(0)
    const stock = [20]

    const add = () => {
        if (number < stock) {
            setNumber(number + 1)
        }
    }
    const rest = () => {
        if ((number <= stock) && (number >= 1))
            setNumber(number - 1)
    }

    const isInCart = (id) => {
        return cart.find((item) => id === item.id)
    }

    const addToCart = (item) => {
        if (isInCart(item.id)) {
            setNumber(item.quantity = number)
        }
        else {
            item.quantity += number
            setCart([...cart, item])
        }
    }
    const removeFromCart = (id) => {
        const newCart = cart.filter((item) => item.id !== id)
        setCart(newCart)
    }

    useEffect(() => {
        setQuantity(cart.length)
    }, [cart])


    const clearAll = (cart) => {
        cart = []
        setCart(cart)
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, quantity, add, rest, number, clearAll }}>
            {children}
        </CartContext.Provider>
    )
}
