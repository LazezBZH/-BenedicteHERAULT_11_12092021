import { Component } from "react"
import "./Thumb.css"

export class Thumb extends Component {
  render() {
    const { title, cover, location } = this.props

    return (
      <article className="cover-Thumb">
        <img cover={cover} alt={`${title} situé en ${location}`} />

        <h2 className="title-Thumb">{title}</h2>
      </article>
    )
  }
}
//non utilisé pour l'instant
