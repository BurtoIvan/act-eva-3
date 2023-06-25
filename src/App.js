import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import BlogPage from './components/BlogPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'; // Importa el archivo App.css existente

function App() {
  return (
    <Router>
      <div className="app-container"> {/* Agrega la clase app-container */}
        <Header />

        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
