import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children})=>{



    const [cartItems, setCartItems] = useState([])
   

    useEffect(()=>{
            
       

    },[cartItems])

    
    const addCartContext = (item)=>{
         setCartItems(item)
         localStorage.setItem('prodCart', JSON.stringify(item))
    }
        
    

    return <CartContext.Provider value={{cartItems, addCartContext, setCartItems}}>
        {children}
    </CartContext.Provider>
}