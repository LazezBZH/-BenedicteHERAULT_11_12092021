import logo from "../../assets/logo.svg"
import "./About.css"
import React from "react"

class About extends React.Component {
  render() {
    return (
      <div className="Home">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>Ici il y aura une bannière montagne et 4 collapses</p>
      </div>
    )
  }
}

export default About
