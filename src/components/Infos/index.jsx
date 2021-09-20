import React from "react"
import "./Infos.css"

export default class Infos extends React.Component {
  render() {
    const hostNameSplit = this.props.host.name.split(" ")
    return (
      <section className="infos">
        <div className="houseInfos">
          <h1>{this.props.title}</h1>
          <p>{this.props.location}</p>
          <div className="tags">
            {this.props.tags.map((tag) => (
              <span key={tag} className="tag">
                <div>{tag}</div>
              </span>
            ))}
          </div>
        </div>
        <div className="hostAndRate">
          <div>
            <div className="host">{hostNameSplit[0]} </div>
            <div className="host">{hostNameSplit[1]}</div>
          </div>

          <div className="hostImg">
            <img src={this.props.host.picture} alt={this.props.title} />
          </div>
          <p>{this.props.rating} les étoiles viendront ne vous inquiétez pas</p>
        </div>
      </section>
    )
  }
}
