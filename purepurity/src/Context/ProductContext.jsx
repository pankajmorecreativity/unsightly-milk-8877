// import { createContext, useContext, useReducer } from "react";
// import reducer from "../reducer/productReducer";
// const ProductContext = createContext();

// const initState = {
//     products: [],
//     isLoading: true,
//     isError: ''
// }
// export const ProductContextProvider = ({children})=>{
//     const[state,dispatch] = useReducer(reducer,initState);
//     const { products, isLoading, isError } = state;
//     const getData = async () => {
//         axios.get('https://63c6286bdcdc478e15bc2414.mockapi.io/products')
//             .then((res) => {
//                 dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
//                 console.log(res.data)
//             }).catch((err) => {
//                 dispatch({ type: 'FETCH_FAILURE', payload: err })

//             })

//     }
//     useEffect(() => {
//         getData();
//     }, [])
// return (
//     <ProductContext.Provider value={{...state,getData}}>
//     {children}
//     </ProductContext.Provider>
// )
   
// }

// const useProductContext = ()=>{
//     return useContext(ProductContext)
// }
// export {ProductContextProvider,useProductContext}