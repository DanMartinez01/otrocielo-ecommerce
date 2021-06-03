import { useState, createContext, useEffect } from 'react';



export const CartContext = createContext()
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
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

    const addToCart = (item) => {
        if (isInCart(item)) {
            setQuantity(item.quantity = number)
            setCart([...cart, item])
            setCartNumber([...cartNumber, item.quantity])
        }
        else {
            item.quantity = number
            setCart([...cart, item])
            setCartNumber([...cartNumber, item.quantity])
        }
        setCart([...cart, item])
        setCartNumber([...cartNumber, item.quantity])
        console.log("cart", cart)
        console.log("item qty", item.quantity)
        console.log("cartnumber", cartNumber)
    }
    // const addToCart = (item, quantity) => {



    //     const newCart = [...cart]

    //     const findItem = isInCart(item);

    //     if (findItem > 0) {
    //         newCart[newCart.findIndex(prod => prod.id === item.id)].quantity += number
    //         setCart(newCart);

    //     }

    //     item.quantity = quantity;
    //     newCart.push(item);
    //     setCart(newCart);
    // }

    // const isInCart = item => cart.find(product => product.id === item.id)
    const removeFromCart = (id) => {
        const newCart = cart.filter((itemId) => itemId[0].id !== id)
        setCart(newCart)
        console.log("cartnumber", cartNumber)
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

    const sumTotal = (cart) => {
        const total = cart.reduce((t, product) =>
            t += (product.price * product.quantity), 0
        ).toFixed(2)
        return total
    }


    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart, quantity, add, rest, number, clearAll, cartNumber, suma, sumTotal }}>
            {children}
        </CartContext.Provider>
    )
}
