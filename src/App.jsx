import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./Components/Header"
import Hero from "./Components/Hero";
import Speciality from "./Components/Speciality";
import Skills from "./Components/Skills";
import Subskills from "./Components/Subskills";
import Portfolio from "./Components/Portfolio";
import Aboutme from "./Components/Aboutme";
import Footer from "./Components/Footer";
import { Box, Flex } from '@chakra-ui/react';


function App() {

  const Skillsdata = [{
    title: "HTML5",
    img: "./public/html5.svg",
    text: "Desde el año 2015, mi segundo año de secundaria, conozco HTML. Es mi primer acercamiento a la programación y ciertamente le guardo aprecio a HTML por esta razón. A pesar de ser cada vez menos utilizado, considero tener conocimientos suficientes en este hipertexto.",
  },{
    title: "CSS",
    img: "./public/css.svg",
    text: "Sobre CSS puedo trabajar para estilizar el contenido de una página, valiéndome de funciones y atributos varios; como flex que creo manejar bien, animaciones para una página, y demás.",
  },{
    title: "PHP",
    img: "./public/php.svg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati dolore quos earum ex vel mollitia dolor exercitationem illum, facere doloremque ducimus blanditiis totam repellat consequatur placeat, quisquam quo, nam corporis.",
  },{
    title: "Python",
    img: "./public/py.svg",
    text: "Durante el primer año de cursado en la carrera de Ingeniería en Sistemas de la Información, en la materia Algoritmos y estrucutra de datos, el lenguaje que utilizamos para programar es Python, estoy muy familiarizado desde ese momento con Python.",
  },{
    title: "Java Script",
    img: "./public/js.svg",
    text: "Varias veces incursioné en el aprendizaje de Java Script, y a pesar de tener los conocimientos básicos, puedo utilizar esta información para complementar algún sitio web. En el curso de este año aprenderé más sobre esto."
    },{
    title: "SQL",
    img: "./public/SQL.svg",
    text: "Sobre SQL solo realicé un curso de DBA1, en el año 2023. Aprendí lo básico sobre bases de datos relacionales, y cómo trabajar sobre ellas. La mayoría del conocimiento que tengo en SQL es gracias a mi trabajo."
  },]

  const Specialitydata= [{
    title: "UI & UX Design",
    text: "Mi pasatiempo favorito es el diseño. Trabajo como diseñador no porque me traiga dinero, sino principalmente porque me gusta. Tengo buen gusto y un ojo agudo."
  },{
    title: "Front-end Developer",
    text: "Otra de mis actividades favoritas es el desarrollo frontend. Puedo crear un sitio web de cualquier complejidad para ti y adaptarlo. Escribo un código claro que es fácil de trabajar en el futuro."
  },{
    title: "Back-end Developer",
    text: "Soy nuevo en el backend, pero puedo hacer cosas simples que se necesitan el 90% del tiempo."
  } 
  ]

  return (
    <ChakraProvider>
      <section>
      <Header/>
      <Box align="center" width="100%" paddingTop="190px" backgroundColor="white" borderColor="pink" border="1px">
        <Hero/>
        <h2>Speciality</h2>
        {Specialitydata.map(elemento=><Speciality title={elemento.title} text={elemento.text}/>)}
        <h2>Skills</h2>
        {Skillsdata.map(elemento=><Skills title={elemento.title} img={elemento.img} text={elemento.text}/>)}
        <Subskills/>
        <h2>Portfolio</h2>
        <Portfolio/>
        <button>Ver mas</button>
        <Aboutme/>
      </Box>
        <Footer/>
      </section>
    </ChakraProvider>
  );
}

export default App
