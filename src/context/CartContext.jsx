import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cartItems, setCartItems] = useState([])

    
    const addCartContext = (item)=>{
        setCartItems(item)
          
    }


    return <CartContext.Provider value={{cartItems, addCartContext}}>
        {children}
    </CartContext.Provider>
}