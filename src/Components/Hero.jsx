import React from 'react'
import PropTypes from 'prop-types'

function Hero(props) {
  return (
    <section> 
        <div> 
        {/* IMAGEN DEL HERO */}
        </div>
        <div> 
            <h1>Mi nombre es <b>Pedro Herrera</b></h1>
        <div> 
            <h2>Soy:</h2>
            <h2>Desarrollador Web</h2>
            <h2>Y</h2>
            <h2>Diseñador Web</h2>
        </div>
        <button>Contacte conmigo</button>
        </div>
    </section>
  )
}

Hero.propTypes = {

}

export default Hero

