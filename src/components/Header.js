import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importa el archivo Header.css existente

function Header() {
  return (
    <header className="header-container"> {/* Agrega la clase header-container */}
      <nav>
        <ul className="nav-menu"> {/* Agrega la clase nav-menu */}
          <li>
            <Link to="/" className="nav-link">Inicio</Link> {/* Agrega la clase nav-link */}
          </li>
          <li>
            <Link to="/blog" className="nav-link">Blog</Link> {/* Agrega la clase nav-link */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
