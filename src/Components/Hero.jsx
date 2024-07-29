import React from 'react'
import { Box, Button, Image, Flex } from '@chakra-ui/react';


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
                <h1>Mi nombre es <b>Pedro Herrera</b></h1>
            
                <h2>Soy: Desarrollador Web Y Diseñador Web</h2>
            
            <Button>Contacte conmigo</Button>
          </div>
          </Box>
        </Flex>
      </Box>
    </section>
  );
};


export default Hero;

