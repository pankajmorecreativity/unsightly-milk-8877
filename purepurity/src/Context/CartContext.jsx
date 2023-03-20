import { createContext,  useReducer } from "react";
import {CartReducer} from "../Reducer/CartReducer";

const initState = {
   shoppingCart:[],
   totalPrice:0,
   qty:0
};


export const CartContext = createContext();
 const  CartContextProvider = ({children})=>{
    const [state,dispatch1] = useReducer(CartReducer,initState)
    // const addToCart = (id,name,image,price)=>{   
    //     dispatch({type:'ADD_TO_CART',payload:{id,name,image,price}})
    // }
return <CartContext.Provider value={{...state,dispatch1}}>
{children}
</CartContext.Provider>
}

// const useCartContext = ()=>{
//     return useContext(CartContext);
// }
export {CartContextProvider}