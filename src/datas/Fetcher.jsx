import React from "react"

export default class Fetcher extends React.Component {
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
      <ul>
        {datas.map((item) => (
          <ul>
            <li key={item.id}>{item.title}</li>
            <li>{item.description}</li>
            <br></br>
          </ul>
        ))}
      </ul>
    )
  }
}
