import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./index.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Houses from "./pages/Houses"
import Error from "./pages/Error"
import reportWebVitals from "./reportWebVitals"
import Header from "./components/Header"
import Footer from "./components/Footer"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route
          path="/house/:id"
          render={(props) => <Houses {...props} />}
        ></Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
