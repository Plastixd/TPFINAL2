import React from 'react'
import { Box, Button, Image, Flex, Text} from '@chakra-ui/react';


function Hero() {
  return (
    <section> 

      <Box>
        <Flex align="center" justify="space-between" flexDirection="row-reverse" width="88%"border="1px" borderColor="red">
          <Box border="1px" borderColor="pink">
            <div> 
              <Image src="/herreracara.jpeg" alt="Pedro Herrera" borderRadius="20px" width="350px" height="350px"/>
            </div>
          </Box>
          <Box border="1px" borderColor="red" align="left" alignContent="center">
            <div> 
                <Text fontFamily="Roboto" fontSize="40px" spacing="1px">Mi nombre es <b>Pedro Herrera</b></Text> 
                <Flex>          
                <Text fontSize="30px" color="#a2a2a2" pl="10px" pr="10px">Soy:</Text> 
                <Text fontSize="30px"> Desarrollador Web </Text> 
                <Text fontSize="30px" pr="15px" pl="15px">Y</Text> 
                <Text fontSize="30px">Diseñador Web</Text>
                </Flex>
            <Button mt="20px" fontFamily="Roboto" fontSize="15px"  p="10px 30px" bg="#c4c4c4" borderRadius="5px" border="none" cursor="pointer">Contacte conmigo</Button>
          </div>
          </Box>
        </Flex>
      </Box>
    </section>
  );
};


export default Hero;

