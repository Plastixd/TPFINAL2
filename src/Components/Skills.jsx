import React from 'react'
import SkillsCards from './SkillsCards'
import { Box, Text } from '@chakra-ui/react';

function Skills() {

const Skillsdata = [{
    title: "HTML5",
    img: "./public/html5.svg",
    text: "Desde el año 2015, mi segundo año de secundaria, conozco HTML. Es mi primer acercamiento a la programación y ciertamente le guardo aprecio a HTML por esta razón. A pesar de ser cada vez menos utilizado, considero tener conocimientos suficientes en este hipertexto.",
    id: "1",
    },{
    title: "CSS",
    img: "./public/css.svg",
    text: "Sobre CSS puedo trabajar para estilizar el contenido de una página, valiéndome de funciones y atributos varios; como flex que creo manejar bien, animaciones para una página, y demás.",
    id: "2",
    },{
    title: "PHP",
    img: "./public/php.svg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati dolore quos earum ex vel mollitia dolor exercitationem illum, facere doloremque ducimus blanditiis totam repellat consequatur placeat, quisquam quo, nam corporis.",
    id: "3",
    },{
    id: "4",
    title: "Python",
    img: "./public/py.svg",
    text: "Durante el primer año de cursado en la carrera de Ingeniería en Sistemas de la Información, en la materia Algoritmos y estrucutra de datos, el lenguaje que utilizamos para programar es Python, estoy muy familiarizado desde ese momento con Python.",
    },{
    id: "5",
    title: "Java Script",
    img: "./public/js.svg",
    text: "Varias veces incursioné en el aprendizaje de Java Script, y a pesar de tener los conocimientos básicos, puedo utilizar esta información para complementar algún sitio web. En el curso de este año aprenderé más sobre esto."
    },{
        id: "6",
    title: "SQL",
    img: "./public/SQL.svg",
    text: "Sobre SQL solo realicé un curso de DBA1, en el año 2023. Aprendí lo básico sobre bases de datos relacionales, y cómo trabajar sobre ellas. La mayoría del conocimiento que tengo en SQL es gracias a mi trabajo."
    }]

  return (
    <Box width="88%"border="1px" borderColor="black">
    <Text align="left" pb="50px" pt="50px" >Skills</Text>
    
        <div>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between"  border="1px" borderColor="blue" gap="40px">
            {Skillsdata.map(elemento=><SkillsCards title={elemento.title} img={elemento.img} text={elemento.text}/>)}
        </Box>
        </div>
    </Box>

  )
}



export default Skills

