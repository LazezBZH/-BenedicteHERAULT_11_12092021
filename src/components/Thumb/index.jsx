import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import "./Thumb.css"

export default class Thumb extends React.Component {
  render() {
    const { title, src, location, id } = this.props
    return (
      <div className="thumb">
        <Link to={`/house/${id}`} title={title} className="link-Thumb">
          <img
            className="cover-Thumb"
            src={src}
            alt={`${title} en ${location}`}
          />
          <div className="filter"></div>
          <h2 className="title-Thumb">{title}</h2>
        </Link>
      </div>
    )
  }
}

Thumb.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}
