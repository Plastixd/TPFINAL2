import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const Header = () => {
  return (
    
      <Box align="center" width="100%" backgroundColor="white" borderColor="pink" border="1px" position="fixed" paddingTop="5px">
      <nav > {/* Inicio del Menu de la pagina */}     
      <Flex align="center" justify="space-between" width="88%"border="1px" borderColor="red">  
      
        <div> {/* Logo de la pagina */}
            <img src="/logoH.png" alt="" />
        </div>
        
        {/* botones del menu */}
        <Flex border="1px" borderColor="blue" gap="15px" alignItems="center"> 
            <p>Inicio</p>
            <p>Especialidades</p>
            <p>Portfolio</p>
            <p>Contacto</p>
        </Flex>
      </Flex>
      </nav>
      </Box>
  );
};

export default Header;
