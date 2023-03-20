// const CartReducer = (state,action)=>{
//     const{shoppingCart,totalPrice,qty} = state;
//     let product,index,updatedPrice,updatedQty;
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             const check =   shoppingCart.find(product=>product.id === action.id);
//             if(check){
//                 return state;
//             }else{
//                 product = action.product;
//                 product['qty']=1;
//                 updatedQty = qty+1;
//                 updatedPrice = totalPrice+product.price;
//                 return {shoppingCart:[product,...shoppingCart],totalPrice:updatedPrice,qty:updatedQty}
//             }
           
            
    
//         default:
//           return state;
//     }
// }