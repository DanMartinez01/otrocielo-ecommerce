import { useState, createContext, useEffect } from 'react';

export const CartContext = createContext()
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [number, setNumber] = useState(1)

    const isInCart = item => cart.find(product => product.id === item.id)

    const addToCart = (item) => {
        if (isInCart(item)) {
            setQuantity(item.quantity = number)
            setCart([...cart, item])
        }
        else {
            item.quantity = number
            setCart([...cart, item])
        }
        setCart([...cart, item])
    }
    const removeFromCart = (id) => {
        const newCart = cart.filter((itemId) => itemId.id !== id)
        setCart(newCart)
    }

    useEffect(() => {
        setQuantity(cart.length)
    }, [cart])


    const clearAll = (cart) => {
        cart = []
        setCart(cart)
    }

    const sumTotal = (cart) => {
        const total = cart.reduce((t, product) =>
            t += (product.price * product.quantity), 0
        ).toFixed(2)
        return total
    }

    return (
        <CartContext.Provider value={{
            cart, setCart, addToCart,
            removeFromCart, quantity,
            clearAll,
            sumTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}
