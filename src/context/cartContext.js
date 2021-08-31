import { useState, createContext } from 'react';

export const CartContext = createContext()
export const CartProvider = ({ children }) => {

    // const [quantity, setQuantity] = useState(0)
    const [cart, setCart] = useState([])

    const isInCart = item => cart.find(product => product.id === item.id)

    const addToCart = (item, quantity) => {
        const newCart = [...cart]
        const itemFound = isInCart(item)
        if (itemFound) {
            newCart[newCart.findIndex(prod => prod.id === item.id)].quantity++
            setCart(newCart)
            return
        }
        item.quantity = quantity
        newCart.push(item)
        setCart(newCart)
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter((itemId) => itemId.id !== id)
        setCart(newCart)
    }

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
            removeFromCart,
            clearAll,
            sumTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}
