import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <section id="contact">
    <h2>Contacta conmigo</h2>
    <div>
        <div>
            <form action="">
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Teléfono" />
                <br />
                <br />
                <br />
                <br />
                <input type="text" placeholder="Mensaje" />
                <div>
                    <button>Send</button>
                    <input type="file" />
                    <label>
                        + Archivo o audio
                    </label>
                </div>
            </form>
        </div>
        <div>
            <h2>Trabajemos juntos!</h2>
            <p>Siempre estoy dispuesto a considerar tu propuesta. Solo necesitas escribirme. Si no te sientes cómodo haciéndolo a través de un sitio web, aquí tienes las redes que pueden ayudarte.</p>
            <div>
                <a target="_blank">
                    <img alt="" />
                </a>
                <a target="_blank">
                    <img alt="" />
                </a>
                <a target="_blank">
                    <img alt="" />
                </a>
                <a target="_blank">
                    <img alt="" />
                </a>
            </div>
        </div>
    </div>
</section>

  )
}

Footer.propTypes = {

}

export default Footer

