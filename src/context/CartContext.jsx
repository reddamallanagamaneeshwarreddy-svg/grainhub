import { createContext, useState } from "react"

export const CartContext = createContext()

function CartProvider({ children }) {

  const [cart, setCart] = useState([])
  const [message, setMessage] = useState("")

  const addToCart = (product) => {

    const existing = cart.find(
      (item) => item.name === product.name
    )

    if (existing) {

      setCart(
        cart.map((item) =>
          item.name === product.name
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      )

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ])

    }

    setMessage(`${product.name} added to cart`)

    setTimeout(() => {
      setMessage("")
    }, 2000)

  }

  const decreaseQuantity = (name) => {

    const existing = cart.find(
      (item) => item.name === name
    )

    if (existing.quantity === 1) {

      removeFromCart(name)

    } else {

      setCart(
        cart.map((item) =>
          item.name === name
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
      )

    }

  }

  const removeFromCart = (name) => {

    setCart(
      cart.filter((item) => item.name !== name)
    )

  }

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        message
      }}
    >

      {children}

    </CartContext.Provider>

  )
}

export default CartProvider