import React from "react"

import "./Houses.css"

export default class Houses extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: [],
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params
    fetch(`./datas.json`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({ datas: jsonResponse })
      })
      .then(console.log(id))
  }

  render() {
    const { datas } = this.state
    const { cover, title, location } = datas

    return (
      <div>
        <img src={cover} alt={title} height={150} width={150} />
        <h1>{title}</h1>
        <span>{location}</span>
      </div>
    )
  }
}
