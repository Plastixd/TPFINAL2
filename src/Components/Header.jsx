import React from 'react';
import { Box, Flex, Image, Link} from '@chakra-ui/react';
import "@fontsource/roboto"; 


const Header = () => {
  return (
    
      <Box align="center" width="100%" backgroundColor="white" borderColor="pink" border="1px" position="fixed" paddingTop="5px">
      <nav > {/* Inicio del Menu de la pagina */}     
      <Flex align="center" justify="space-between" width="88%"border="1px" borderColor="red">  
      
        <div> {/* Logo de la pagina */}
            <Image src="/logoH.png" backgroundColor="white" ></Image>
        </div>
        
        {/* botones del menu */}
        <Flex fontFamily="'Roboto'"
          fontWeight="600"
          href="#" border="1px" borderColor="blue" mr="15px"gap="15px" alignItems="center"> 
          
          <Link href="#" style={{ textDecoration: 'none' }}> Inicio </Link>
          <Link href="#" style={{ textDecoration: 'none' }}> Especialidades </Link>
          <Link href="#" style={{ textDecoration: 'none' }}> Portfolio </Link>
          <Link href="#" style={{ textDecoration: 'none' }}> Contacto </Link>
        
            
        </Flex>
      </Flex>
      </nav>
      </Box>
  );
};

export default Header;
