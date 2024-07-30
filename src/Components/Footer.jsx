import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react';


function Footer() {
  return (
    <Flex  flexDirection="" 
    pt="50px" pb="200px" width="88%" height="" border="1px" borderColor="black" justifyContent="space-between">

        <Flex height="600px" alignItems="left" flexDirection="column" border="1px" borderColor="blue" width="40%">
            <form action="">
                <Flex flexDirection="column">
                <input type="text" placeholder="Nombre" />
                <input type="number" placeholder="Teléfono" />
                <input type="text" placeholder="Mensaje" />
                </Flex>
            </form>
                <Text align="left">
                    <button>Send</button>
                    <input type="file" />
                    {/* <label>
                        + Archivo o audio
                    </label> */}
                </Text>
        </Flex>
        <Flex flexDirection="column" width="40%" border="1px" borderColor="pink" justifyContent="end" >   
            <Text align="left">Trabajemos juntos!</Text>
            <Text align="left">Siempre estoy dispuesto a considerar tu propuesta. Solo necesitas escribirme. Si no te sientes cómodo haciéndolo a través de un sitio web, aquí tienes las redes que pueden ayudarte.</Text>
            <Flex>
                <a target="_blank">
                    <img alt="" />
                </a>
                <a target="_blank">
                    <img alt="" />
                </a>
                <a target="_blank">
                    <img alt="" />
                </a>
                <a target="_blank">
                    <img alt="" />
                </a>
                </Flex>
        </Flex>
    </Flex>


  )
}


export default Footer

