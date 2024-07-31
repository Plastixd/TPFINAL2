import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react'
import Header from "./Components/Header"
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import Subskills from "./Components/Subskills";
import Portfolio from "./Components/Portfolio";
import Aboutme from "./Components/Aboutme";
import Footer from "./Components/Footer";
import Speciality from "./Components/Speciality";
import { Box, Divider} from '@chakra-ui/react';



function App() {

  return (
    <ChakraProvider>
      <Header/>
      <Box align="center" width="100%" paddingTop="190px" backgroundColor="white" borderColor="pink" border="">
        <Hero/>
        <Divider position="relative" right="20%" borderColor="" width="90%"/>
        <Speciality/>
        <Divider position="relative" right="20%" borderColor="" width="90%"/>
        <Skills/>
        <Subskills/>
        <Divider pt="20px" position="relative" right="20%" borderColor="" width="90%"/>
        <Portfolio/>
        <Divider position="relative" right="20%" borderColor="" width="90%"/>
        <Aboutme/>
        <Divider position="relative" right="20%" borderColor="" width="90%"/>
        <Footer/>
      </Box>
    
      
      
    </ChakraProvider>
  );
}

export default App
