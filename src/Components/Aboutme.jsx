import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Text } from '@chakra-ui/react';


function Aboutme() {
  return (
    <section>
    <Box pt="50px" pb="200px" width="88%"border="1px" borderColor="black">
        
        <Box align="left" border="1px" borderColor="red">
        <h2>Algo</h2> <h2>Sobre</h2> <h2>Mi</h2>
        </Box>
            <Text align="left" mr="80px" ml="82px">
            <p>¡Hola! Mi nombre es Pedro y estoy cursando la diplomatura en programación web full stack 2024. He completado cursos como DBA1 de la academia CISCO en la UTN y demás. En este momento, estoy estudiando y profundizando en el desarrollo web. Soy estudiante en la Universidad Tecnológica, estudiando la carrera sistemas.</p>
            <p>Creo que lo más importante en la vida es encontrarse a uno mismo y descubrir lo que te gusta. Estoy muy contento de haber elegido este camino. Esto me motiva y por eso sigo adelante. Paciencia y un poco de esfuerzo.</p>    
            </Text>

        <Box align="right" border="1px" borderColor="red">
            <h2>Que</h2>
            <h2>Puedo</h2>
            <h2>Ofrecer</h2>
            <h2>A ti</h2>
        </Box>
            <Text align="left" ml="82px">
            <p>Trabajar conmigo significa recibir un trabajo de calidad. Doy lo mejor de mí y entiendo bien al cliente o empleador. ¡Además, aprendo y me adapto rápidamente!</p>
            </Text>
    </Box>
    
    </section>
        )
    }



export default Aboutme

