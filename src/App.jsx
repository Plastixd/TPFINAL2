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
import { Box,} from '@chakra-ui/react';


function App() {

  return (
    <ChakraProvider>
      <section>
      <Header/>
      <Box align="center" width="100%" paddingTop="190px" backgroundColor="white" borderColor="pink" border="">
        <Hero/>
        <Speciality/>
        <Skills/>
        <Subskills/>
        <Portfolio/>
        <Aboutme/>
      
        <Footer/>
      </Box>
      </section>
    </ChakraProvider>
  );
}

export default App
