import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  const menuStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#1565C0', // Fondo azul
    color: '#FFFFFF', // Texto en color blanco
  };

  return (
    <nav style={menuStyle}>
      <Link to="/">Inicio</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  );
};

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1565C0', // Fondo azul
    color: '#FFFFFF', // Texto en color blanco
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <footer style={footerStyle}>
      &copy; {new Date().getFullYear()} Mi App Facultad. Todos los derechos reservados.
    </footer>
  );
};

const WelcomePage = () => {
  const pageStyle = {
    backgroundColor: '#0D47A1', // Fondo azul oscuro
    color: '#FFFFFF', // Texto en color blanco
    textAlign: 'center',
    padding: '50px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage:
      'url("https://images.pexels.com/photos/12746705/pexels-photo-12746705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // URL de la imagen de fondo psicodélico
    backgroundSize: 'cover',
  };

  return (
    <div style={pageStyle}>
      <h1>Bienvenido a nuestra pagina de Fotos</h1>
      <p>¡Explora y disfruta de nuestro contenido!</p>
    </div>
  );
};

export default WelcomePage;
