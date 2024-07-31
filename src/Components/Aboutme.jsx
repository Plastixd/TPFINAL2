import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Text } from '@chakra-ui/react';


function Aboutme() {
  return (
    <section>
    <Box pt="50px" pb="200px" width="88%">
        
        <Box align="left"  fontSize="30px" fontFamily="roboto" textAlign="left" color="black">
        <Text width="80px"><b>Algo Sobre Mi</b></Text>
        </Box>
            <Text align="left"  fontSize="17px"fontFamily="roboto" color="black" align="left" mr="80px" ml="92px">
            ¡Hola! Mi nombre es Pedro y estoy cursando la diplomatura en programación web full stack 2024. He completado cursos como DBA1 de la academia CISCO en la UTN y demás. En este momento, estoy estudiando y profundizando en el desarrollo web. Soy estudiante en la Universidad Tecnológica, estudiando la carrera sistemas.
            </Text>
            <Text align="left" pt="30px" fontSize="17px"fontFamily="roboto" color="black" align="left" mr="80px" ml="92px">
            <p>Creo que lo más importante en la vida es encontrarse a uno mismo y descubrir lo que te gusta. Estoy muy contento de haber elegido este camino. Esto me motiva y por eso sigo adelante. Paciencia y un poco de esfuerzo.</p>    
            </Text>

        <Box align="right">
            <Text textAlign="left"width="100px" fontSize="30px" fontFamily="roboto" color="black">
            <b>Que Puedo Ofrecer A ti</b> 
            </Text>
            
        </Box>
            <Text mr="100px"spacing="0px"align="left" fontSize="17px"fontFamily="roboto" color="black" align="left" ml="92px">
            <p>Trabajar conmigo significa recibir un trabajo de calidad. Doy lo mejor de mí y entiendo bien al cliente o empleador. ¡Además, aprendo y me adapto rápidamente!</p>
            </Text>
    </Box>
    
    </section>
        )
    }



export default Aboutme

