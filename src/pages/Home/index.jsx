import logo from "../../assets/logo.svg"
import "./Home.css"
import React from "react"

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>Patience ça vient!</p>
      </div>
    )
  }
}

export default Home
