import React from "react"
import "./Carrousel.css"
import logo from "../../assets/logo-footer.svg"

export default class Carrousel extends React.Component {
  render() {
    return (
      <div className="carrousel">
        <img src={logo} alt="logo de Kasa" />
        <p>ICI SERA LE CARROUSEL</p>
        <img src={logo} alt="logo de Kasa" />
      </div>
    )
  }
}
