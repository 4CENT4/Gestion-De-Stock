import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Navbar.css"; 

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      
      <div className="navbar__logo">Stockini</div>

      
      <button
        onClick={() => navigate("/login")}
        className="navbar__button"
      >
        Connexion
      </button>
    </nav>
  );
};

export default Navbar;
