import React from 'react'
import PropTypes from 'prop-types'
import SpecialityCards from './SpecialityCards'
import { Box, Text } from '@chakra-ui/react';



function Speciality() {

const Specialitydata= [{
    id: 1,
    title: "UI & UX Design",
    text: "Mi pasatiempo favorito es el diseño. Trabajo como diseñador no porque me traiga dinero, sino principalmente porque me gusta. Tengo buen gusto y un ojo agudo."
    },{
    id: 2,
    title: "Front-end Developer",
    text: "Otra de mis actividades favoritas es el desarrollo frontend. Puedo crear un sitio web de cualquier complejidad para ti y adaptarlo. Escribo un código claro que es fácil de trabajar en el futuro."
    },{
    id: 3,
    title: "Back-end Developer",
    text: "Soy nuevo en el backend, pero puedo hacer cosas simples que se necesitan el 90% del tiempo."
    }]

  return (
    <Box width="88%"border="1px" borderColor="black">
    <Text as="b" textAlign="left" pb="50px" pt="50px"  >Especialidades</Text>
            <div>
              <Box display="flex" flexWrap="wrap" justifyContent="space-between"  border="1px" borderColor="blue">
                {Specialitydata.map(elemento=><SpecialityCards title={elemento.title} text={elemento.text} id={elemento.id}/>)}
              </Box>
            </div>
    </Box>
    
  )
}

Speciality.propTypes = {

}

export default Speciality

