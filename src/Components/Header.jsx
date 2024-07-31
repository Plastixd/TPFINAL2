import React from 'react';
import { Box, Flex, Image, Link} from '@chakra-ui/react';
import "@fontsource/roboto"; 


const Header = () => {
  return (
    
      <Box align="center" width="100%" backgroundColor="white" position="fixed" paddingTop="5px">
      <nav > {/* Inicio del Menu de la pagina */}     
      <Flex align="center" justify="space-between" width="88%">  
      
        
            <Image src="/logoH.png" backgroundColor="white" ></Image>
        
        
        {/* botones del menu */}
        <Flex fontFamily="'Roboto'"
          fontWeight="600" mr="15px"gap="15px" alignItems="center"> 
          
          <Link href="#" transition="transform 0.3s" _hover={{ transform: 'scale(1.1)' }}  style={{ textDecoration: 'none' }}> Inicio </Link>
          <Link href="#" transition="transform 0.3s" _hover={{ transform: 'scale(1.1)' }}  style={{ textDecoration: 'none' }}> Especialidades </Link>
          <Link href="#" transition="transform 0.3s" _hover={{ transform: 'scale(1.1)' }}  style={{ textDecoration: 'none' }}> Portfolio </Link>
          <Link href="#" transition="transform 0.3s" _hover={{ transform: 'scale(1.1)' }}  style={{ textDecoration: 'none' }}> Contacto </Link>
        
            
        </Flex>
      </Flex>
      </nav>
      </Box>
  );
};

export default Header;
