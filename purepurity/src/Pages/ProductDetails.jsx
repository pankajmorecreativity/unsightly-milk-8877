import React, { useReducer,useEffect,useState, useContext} from 'react'
import CartAmountToggle from '../Components/CartAmountToggle';
import { Link as Router ,useParams } from 'react-router-dom'
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,

  } from '@chakra-ui/react';    

import axios from 'axios';
import { CartContext } from '../Context/CartContext';


const initState = {
    product :[],
    isLoading : true,
    isError : ''
}

const reducer = (state,action)=>{
switch (action.type) {
    case 'FETCH_SUCCESS':
        return {
            ...state,
            product : action.payload,
            isLoading : false,
            isError : false,
        }
    case 'FETCH_FAILURE':
        return {
            product :[],
            isLoading : false,
            isError : 'Something went wrong, Please refresh',
        }
       
    default:
        return state;
}
}

const ProductDetails = () => {
const[amount,setAmount] = useState(1);
const {dispatch1} = useContext(CartContext);
// console.log("Data",data);
const[state,dispatch] = useReducer(reducer,initState)
const{product,isLoading,isError} = state;
const{id} = useParams();

const getData = async()=>{
    axios.get(`https://63c6286bdcdc478e15bc2414.mockapi.io/products/${id}`)
    .then((res)=>{
        dispatch({type : 'FETCH_SUCCESS',payload : res.data})
        console.log(res.data)
    }).catch((err)=>{
        dispatch({type : 'FETCH_FAILURE',payload : err})

    })
    
};
useEffect(()=>{
    getData();
},[])

const setDecrease = ()=>{
  amount > 1 ? setDecrease(amount-1) : setDecrease(1);
}
const setIncrease = ()=>{
 setIncrease(amount+1);
}
const{name,image,price} = product;
  return (
    <div>
    
    <Stack>
    </Stack>
        <Container maxW={'4xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={image}
            fit={'cover'}
            align={'center'}
            // marginTop={10}
            w={'auto'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '3xl' }}>
              {name}
            </Heading>
            <Text textDecoration={'line-through'} color={'gray.600'}
             fontSize={{ base: '2xl', sm: '4xl', lg: '2xl' }}>
                $24.96
              </Text>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              MRP, ₹{price}
            </Text>
            
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Item Number: Please Select Size
                    A Catherines favorite returns. We've redesigned your most-loved quilted jacket in a reversible style to give you two looks in one. Classic leopard print on one side, fun dotted print on the reverse.

                    FABRIC: Lightweight quilted fabric is soft, smooth and cool to the touch. As a top layer, this fabric adds beauty and texture to any oufit.
              </Text>
              <Text fontSize={'lg'}>
              100% Polyester

                Machine Wash

                Imported Plus Size Top

                Front Length (On Body): Regular 32”, Petite 30”

                Plus Sizes 0X–6X, Petite Plus Sizes 0XWP–3XWP Catherines
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>100% Polyester</ListItem>
                  <ListItem>Machine Wash</ListItem>{' '}
                  <ListItem>Imported Plus Size Top</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Front Length (On Body): Regular 32”, Petite 30”</ListItem>
                  <ListItem>Plus Sizes 0X–6X, Petite Plus Sizes 0XWP–3XWP Catherines</ListItem>
                  <ListItem>Imported Plus Size Top</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                {/* Product Details */}
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
          </Stack>
       
          <Router to='/cart'>
          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }} onClick={()=>dispatch1({type:"ADD_TO_CART",id:product.id,product})}>
            Add to cart
           
          </Button>
        </Router>
         {/* <CartAmountToggle 
          amount = {amount}
          setDecrease = {setDecrease}
          setIncrease = {setIncrease}
        />  */}
          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
    
    </div>
   

  )
}


export default ProductDetails