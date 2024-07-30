import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex,Image, Text, Button} from '@chakra-ui/react';


function Portfolio(props) {
  return (
    <Box width="88%"border="1px" borderColor="black">
    <Text align="left"pb="50px" pt="50px">Portfolio</Text>
      <Flex flexDirection="row" flexWrap="wrap" gap="20px">
        <Image src="./ej.png" borderRadius="20px" mt="10px" width="380px" height="330px"></Image>
        <Image src="./ej.png" borderRadius="20px" mt="10px"width="380px" height="330px"></Image>
        <Image src="./ej.png" borderRadius="20px" mt="10px"width="380px" height="330px"></Image>
        <Image src="./ej.png" borderRadius="20px"  mt="10px" width="380px" height="330px"></Image>
        <Image src="./ej.png" borderRadius="20px" mt="10px"width="380px" height="330px"></Image>
        <Image src="./ej.png" borderRadius="20px" mt="10px"width="380px" height="330px"></Image>
      </Flex>
    <Button pt="50px">Ver más</Button>
    </Box>
  )
};

export default Portfolio

