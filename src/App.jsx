import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import Header from "./Components/Header"
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Subskills from "./Components/Subskills";
import Portfolio from "./Components/Portfolio";
import Aboutme from "./Components/Aboutme";
import Footer from "./Components/Footer";
import Speciality from "./Components/Speciality";
import { Box, Flex } from '@chakra-ui/react';


function App() {

  return (
    <ChakraProvider>
      <section>
      <Header/>
      <Box align="center" width="100%" paddingTop="190px" backgroundColor="white" borderColor="pink" border="1px">
        <Hero/>
        <Speciality/>
        <h2>Skills</h2>
        <Skills/>
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
