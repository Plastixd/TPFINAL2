import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex,Image, Text, Button} from '@chakra-ui/react';


function Portfolio(props) {
  return (
    <Box pb="100px" width="88%">
    <Text fontSize="30px" fontFamily="roboto" textAlign="left" pb="50px" pt="50px" color="black" ><b>Portfolio</b></Text>
      <Flex flexDirection="row" flexWrap="wrap" gap="20px">
        <Image src="./ej.png" borderRadius="20px" mt="10px" width="380px" height="330px"
        cursor="pointer"transition="transform 0.3s" 
        _hover={{ transform: 'scale(1.1)' }} ></Image>
        <Image src="./ej.png" borderRadius="20px" mt="10px"width="380px" height="330px"
        cursor="pointer" transition="transform 0.3s" 
        _hover={{ transform: 'scale(1.1)' }} ></Image>
        <Image src="./ej.png" borderRadius="20px" mt="10px"width="380px" height="330px"
        cursor="pointer" transition="transform 0.3s" 
        _hover={{ transform: 'scale(1.1)' }} ></Image>
        <Image src="./ej.png" borderRadius="20px"  mt="10px" width="380px" height="330px"
        cursor="pointer" transition="transform 0.3s" 
        _hover={{ transform: 'scale(1.1)' }} ></Image>
        <Image src="./ej.png" borderRadius="20px" mt="10px"width="380px" height="330px"
        cursor="pointer" transition="transform 0.3s" 
        _hover={{ transform: 'scale(1.1)' }} ></Image>
        <Image src="./ej.png" borderRadius="20px" mt="10px"width="380px" height="330px"
        cursor="pointer" transition="transform 0.3s" 
        _hover={{ transform: 'scale(1.1)' }} ></Image>
      </Flex>
    <Button mt="20px" p="10px 30px"
    width="320px" height="70px"
    fontSize="30px" fontFamily="Roboto" bg="#a2a2a2" borderRadius="5px" border="none" cursor="pointer"
    color="white">Ver más</Button>
    </Box>
  )
};

export default Portfolio

