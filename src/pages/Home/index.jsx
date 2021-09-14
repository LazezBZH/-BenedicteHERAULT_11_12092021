import React from "react"
import "./Home.css"
import BannerHome from "../../assets/banner-Home.jpg"
import Banner from "../../components/Banner"

class Home extends React.Component {
  render() {
    return (
      <main className="Home">
        <Banner
          imgSrc={BannerHome}
          altTxt="paysage terre et mer"
          title="Chez vous, partout et ailleurs"
        />

        <p>Patience ça vient!</p>
      </main>
    )
  }
}

export default Home
