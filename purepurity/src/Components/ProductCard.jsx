import {Link as RouterLink} from 'react-router-dom'

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  
  
  export default function ProductCard({id,name,image,price}) {
    return (
      <Center py={12}>
      <RouterLink to={`/products/${id}`}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'370px'}
            cursor="pointer"
           
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
            //   backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={image} h="auto" 
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            
            </Heading>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {name}
            </Text>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
              MRP, ₹{price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                $24.96
              </Text>
            </Stack>
          </Stack>
        </Box>
        </RouterLink>
      </Center>
    );
  }