import React from "react"
import "./Galery.css"
import Thumb from "../Thumb"
export default class Galery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: [],
    }
  }

  componentDidMount() {
    fetch("datas.json")
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
          <article key={`thumb-${item.id}`} className="thumbs">
            <Thumb
              title={item.title}
              src={item.cover}
              id={item.id}
              location={item.location}
            />
          </article>
        ))}
      </section>
    )
  }
}
