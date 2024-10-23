const { createContext } = require("react");
import { useState, useEffect} from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
    const ls= typeof window !== 'undefined' ? window.localStorage : null;
   

    const [cartProducts, setCartProducts] = useState( []);
    useEffect(()=>{
        if(cartProducts?.length > 0){
            ls?.setItem('cart', JSON.stringify(cartProducts));
        }
    },[cartProducts]);

    useEffect(()=>{
        if(ls && ls.getItem('cart')){
            setCartProducts(JSON.parse(ls.getItem('cart')));
        }
    },[]);

    function addProduct(productId) {
        if(cartProducts.includes(productId)){
            alert(`This item is already in your cart`); 
        }
        else{
        setCartProducts(prev=>[...prev, productId]);
        }
    }

    function removeProduct(productId) {
        setCartProducts((prev) => prev.filter((id) => id !== productId));
        if (cartProducts.length === 1) {
            // Reset the cart to an empty array
            clearCart();
          }
      }

      function clearCart() {
        setCartProducts([]);
        ls?.removeItem('cart'); //Using to remove data from localStorage to make sure when refresh the page its not appearing 
      }

    return (
        <CartContext.Provider value={{cartProducts, setCartProducts,addProduct, removeProduct, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}