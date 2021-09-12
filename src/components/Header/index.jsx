import React from "react";
import "./Header.css";
import logo from "../../logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header>
        
          <img className="logo-Header" src={logo} alt="logo de Kasa" />
    

       
          <nav className="nav-Header">
            <p>Accueil</p>
            <p>À propos</p>
          </nav>
        
      </header>
    );
  }
}

export default Header;