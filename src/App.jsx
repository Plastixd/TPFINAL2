import React from "react";
import Header from "./Components/Header"
import Hero from "./Components/Hero";
import Speciality from "./Components/Speciality";
import Skills from "./Components/Skills";
import Subskills from "./Components/Subskills";
import Portfolio from "./Components/Portfolio";
import Aboutme from "./Components/Aboutme";
import Footer from "./Components/Footer";

function App() {

  return (
    <section>
      <h1>HOLA MUNDO</h1>
      <Header/>
      <Hero/>
      <h2>Speciality</h2>
      <Speciality/>
      <h2>Skills</h2>
      <Skills/>
      <Subskills/>
      <h2>Portfolio</h2>
      <Portfolio/>
      <button>Ver mas</button>
      <Aboutme/>
      <Footer/>
    </section>
  );
}

export default App
