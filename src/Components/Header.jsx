import React from 'react';

const Header = () => {
  return (
    <header>
      <nav > {/* Inicio del Menu de la pagina */}
        <div> {/* Logo de la pagina */}
            <p>LOGO</p>
        </div>
        
        {/* botones del menu */}
        <div>
          <a>Inicio</a>
          <a>Especialidades</a>
          <a>Portfolio</a>
          <a>Contacto</a>
        </div>
      </nav> {/* Fin del menú de la página */}
    </header>
  );
};

export default Header;
