import { Component } from "react"
import PropTypes from "prop-types"
import "./Thumb.css"

export default class Thumb extends Component {
  render() {
    const { title, src, location } = this.props
    return (
      <div className="thumb">
        <img
          className="cover-Thumb"
          src={src}
          alt={`${title} en ${location}`}
        />
        <div className="filter"></div>
        <h2 className="title-Thumb">{title}</h2>
      </div>
    )
  }
}

Thumb.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}
