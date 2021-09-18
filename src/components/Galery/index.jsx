import React from "react"
import "./Galery.css"

export default class Galery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: [],
    }
  }

  componentDidMount() {
    fetch("./datas.json")
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({
          datas: jsonResponse,
        })
      })
  }
  render() {
    const { datas } = this.state

    return (
      <section className="galery">
        {datas.map((item) => (
          <article key={`thumb-${item.id}`} className="thumb">
            <img
              className="cover-Thumb"
              src={item.cover}
              alt={`${item.title} situé en ${item.location}`}
            />
            <div className="filter"></div>
            <h2 className="title-Thumb">{item.title}</h2>
          </article>
        ))}
      </section>
    )
  }
}
