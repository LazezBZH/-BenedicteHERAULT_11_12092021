import "./About.css"
import React from "react"
import BannerAbout from "../../assets/banner-About.jpg"
import Banner from "../../components/Banner"

class About extends React.Component {
  render() {
    return (
      <main className="About">
        <Banner imgSrc={BannerAbout} altTxt="paysage montagne" />

        <p>4 collapses seront bientôt là!</p>
      </main>
    )
  }
}

export default About
