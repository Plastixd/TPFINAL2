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

  const Skillsdata = [{
    title: "HTML5",
    img: "./public/html5.svg",
    text: "Desde el año 2015, mi segundo año de secundaria, conozco HTML. Es mi primer acercamiento a la programación y ciertamente le guardo aprecio a HTML por esta razón. A pesar de ser cada vez menos utilizado, considero tener conocimientos suficientes en este hipertexto.",
  },{
    title: "HTML5",
    img: "./public/html5.svg",
    text: "Desde el año 2015, mi segundo año de secundaria, conozco HTML. Es mi primer acercamiento a la programación y ciertamente le guardo aprecio a HTML por esta razón. A pesar de ser cada vez menos utilizado, considero tener conocimientos suficientes en este hipertexto.",
  },{
    title: "HTML5",
    img: "./public/html5.svg",
    text: "Desde el año 2015, mi segundo año de secundaria, conozco HTML. Es mi primer acercamiento a la programación y ciertamente le guardo aprecio a HTML por esta razón. A pesar de ser cada vez menos utilizado, considero tener conocimientos suficientes en este hipertexto.",
  },{
    title: "HTML5",
    img: "./public/html5.svg",
    text: "Desde el año 2015, mi segundo año de secundaria, conozco HTML. Es mi primer acercamiento a la programación y ciertamente le guardo aprecio a HTML por esta razón. A pesar de ser cada vez menos utilizado, considero tener conocimientos suficientes en este hipertexto.",
  },{
    title: "HTML5",
    img: "./public/html5.svg",
    text: "Desde el año 2015, mi segundo año de secundaria, conozco HTML. Es mi primer acercamiento a la programación y ciertamente le guardo aprecio a HTML por esta razón. A pesar de ser cada vez menos utilizado, considero tener conocimientos suficientes en este hipertexto.",
  },{
    title: "HTML5",
    img: "./public/html5.svg",
    text: "Desde el año 2015, mi segundo año de secundaria, conozco HTML. Es mi primer acercamiento a la programación y ciertamente le guardo aprecio a HTML por esta razón. A pesar de ser cada vez menos utilizado, considero tener conocimientos suficientes en este hipertexto.",
  },
]

  return (
    <section>
      <h1>HOLA MUNDO</h1>
      <Header/>
      <Hero/>
      <h2>Speciality</h2>
      <Speciality/>
      <h2>Skills</h2>
      {Skillsdata.map(elemento=><Skills title={elemento.title} img={elemento.img} text={elemento.text}/>)}
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
