import React from 'react'
import { Box,Button, Flex, Text,Input,Link,Image} from '@chakra-ui/react';


function Footer() {
  return (
    <Box width="88%">
            <Text fontSize="30px" fontFamily="roboto" textAlign="left" pb="50px" pt="50px"><b>Contacta conmigo</b></Text>

    <Flex  flexDirection="" 
    pt="50px" pb="200px" width="100%" height=""  justifyContent="space-between">

        <Flex height="300px" alignItems="left" flexDirection="column"  width="40%">
            <form action="">
                <Flex flexDirection="column">
                    <Input type="text" placeholder="Nombre" border="none" borderBottom="solid" pb="15px"
borderColor="#a2a2a2" fontSize="25px" Outline="none"
pt="30px"></Input>
                    <Input type="number" placeholder="Teléfono" border="none" borderBottom="solid" pb="15px"
borderColor="#a2a2a2" fontSize="25px" Outline="none"
pt="40px"></Input>
                    <Input type="text" placeholder="Mensaje" border="none" borderBottom="solid" pb="15px"
borderColor="#a2a2a2" fontSize="25px" Outline="none"
pt="120px"></Input>
               
                </Flex>
            </form>
                <Text align="left" justifyContent="center">
                    <Button mt="20px" color="white" fontFamily="Roboto" fontSize="20px"  p="10px 30px" bg="#c4c4c4"  border="none" cursor="pointer"
                    width="150px" height="40px" borderRadius="10px">
                        Send
                    </Button>
                    <Input id="archivo" label=""type="file" display="none" fontSize="20px"></Input>
                    <label  htmlFor="archivo">
        
                        <Box as="span" pl="30px" 
                            cursor="pointer" backgroundColor="transparent" color="black" border="none"
                            transition="color 0.3s, color 0.3s"
                            _hover={{color: 'gray'}} fontSize="20px">
                            + Archivo o audio
                        </Box>
                    </label>
                </Text>
        </Flex>
        <Flex flexDirection="column" width="40%"  justifyContent="end" >   
            <Text fontSize="30px" fontFamily="roboto" textAlign="left"  pt="50px"><b>Trabajemos juntos!</b></Text>
            <Text align="left">Siempre estoy dispuesto a considerar tu propuesta. Solo necesitas escribirme. Si no te sientes cómodo haciéndolo a través de un sitio web, aquí tienes las redes que pueden ayudarte.</Text>
            <Flex>
            <Flex textAlign="center" mt={10} gap="10px" >
                <Link href="#" isExternal _hover={{ textDecoration: 'none' }}>
                <Image src="/facebook.svg" transition="transform 0.3s" 
            _hover={{ transform: 'scale(1.1)' }} height="20px"alt="" />
                </Link>
                <Link href="#" isExternal _hover={{ textDecoration: 'none' }}>
                <Image  src="/instagram.svg" transition="transform 0.3s" 
            _hover={{ transform: 'scale(1.1)' }} height="20px" alt=""/>
                </Link>
                <Link href="#" isExternal _hover={{ textDecoration: 'none' }}>
                <Image src="/telegram.svg" transition="transform 0.3s" 
            _hover={{ transform: 'scale(1.1)' }}  height="20px" alt="" />
                </Link>
                <Link href="#" isExternal _hover={{ textDecoration: 'none' }}>
                <Image src="/behance.svg" transition="transform 0.3s" 
            _hover={{ transform: 'scale(1.1)' }}  height="20px" alt="" />
                </Link>
            </Flex>
                </Flex>
        </Flex>
    </Flex>
    </Box>

  )
}


export default Footer

