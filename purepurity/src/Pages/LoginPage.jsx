import React, { useContext,useState } from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';
const LoginPage = () => {
  const{isAuth,login,logOut} = useContext(AuthContext); 
  const[email,setEmail] = useState('eve.holt@reqres.in');
  const[password,setPassword] = useState('cityslicka');

  const handleLogin = ()=>{
    const userDetails = {
      email,password
    }
    fetch('https://reqres.in/api/login',{
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body:JSON.stringify(userDetails)
    })
    .then((res)=>res.json())
    .then((data)=>{
      login(data.token);
    }).catch((err)=>{
      console.log(err);
    })

  };
  if(isAuth){
    return <Navigate to="/"/>
  }
  return (
    <div>
        <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value = {email} onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value = {password} onChange={(e)=>setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={handleLogin}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </div>
  )
}

export default LoginPage