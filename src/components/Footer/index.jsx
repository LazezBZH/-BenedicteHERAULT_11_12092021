import React from "react"
import "./Footer.css"
import logo from "../../assets/logo-footer.svg"
class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p className="logo-Footer">
          <img src={logo} alt="logo de Kasa" />
        </p>

        <p className="copyright">© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
}

export default Footer
