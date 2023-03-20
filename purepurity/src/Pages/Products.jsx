import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { Grid, GridItem } from '@chakra-ui/react'
import ProductCard from '../Components/ProductCard'
import Sort from '../Components/Sort'
import { useProductContext } from '../Context/ProductContext'


const initState = {
    products: [],
    isLoading: true,
    isError: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                products: action.payload,
                isLoading: false,
                isError: false,
            }
        case 'FETCH_FAILURE':
            return {
                products: [],
                isLoading: false,
                isError: 'Something went wrong, Please refresh',
            }

        default:
            throw new Error();
    }
}
const Products = () => {
    // const{getData} = useProductContext();
    const [state, dispatch] = useReducer(reducer, initState)
    const { products, isLoading, isError } = state;
    const getData = async () => {
        axios.get('https://63c6286bdcdc478e15bc2414.mockapi.io/products')
            .then((res) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
                console.log(res.data)
            }).catch((err) => {
                dispatch({ type: 'FETCH_FAILURE', payload: err })

            })

    }
    useEffect(() => {
        getData();
    }, [])


    return (
        <div>

 <Sort/>
            <Grid templateColumns="repeat(4,1fr)" gap={3} w="100%">
                {products?.length > 0 && products.map((e) => {
                    return (

                        <GridItem key={e.id}>
                            <ProductCard
                                id={e.id}
                                name={e.name}
                                image={e.image}
                                price={e.price}

                            />
                        </GridItem>
                    )

                })}
            </Grid>
            {/* <Sidebar/> */}
        </div>
    )
}

export default Products