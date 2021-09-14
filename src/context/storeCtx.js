import React, { createContext, useState, useEffect, useContext } from 'react'
import { commerce } from '../lib/commerce'

const StoreContext = createContext()

export const useStore = () => {
  return useContext(StoreContext)
}

const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState({})
  const [products, setProducts] = useState([])

  useEffect(async () => {
    const { data } = await commerce.products.list()
    setProducts(data)
    setCart(await commerce.cart.retrieve())
  }, [])

  const addToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity)
    setCart(cart)
  }

  const updateQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity })
    setCart(cart)
  }

  const removeFromCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.remove(productId)
    setCart(cart)
  }

  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty()
    setCart(cart)
  }

  return (
    <StoreContext.Provider
      value={{
        cart,
        setCart,
        products,
        setProducts,
        addToCart,
        updateQty,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
