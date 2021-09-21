import React from "react"
import "./Houses.css"
import Carrousel from "../../components/Carrousel"
import Infos from "../../components/Infos"
import Error from "../Error"
import Collapse from "../../components/Collapse"

export default class Houses extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      datas: [],
    }
  }

  getData(url) {
    fetch(url)
      .then((response) => response.json())
      .then(
        (jsonResponse) => {
          const idInUrl = this.props.match.params.id
          const itemToShow = jsonResponse.find((item) => item.id === idInUrl)

          if (itemToShow) {
            this.setState({
              isLoaded: true,
              datas: itemToShow,
            })
          }
        },
        (error) => {
          this.setState({ error })
        }
      )
  }

  componentDidMount() {
    this.getData("../datas.json")
  }

  render() {
    const { error, isLoaded } = this.state

    if (error) {
      return (
        <div>
          <Error />
        </div>
      )
    } else if (!isLoaded) {
      return <div>Chargement en cours</div>
    } else {
      const { host, location, rating, tags, title, description, equipments } =
        this.state.datas

      return (
        <main className="Houses">
          <Carrousel />
          <Infos
            location={location}
            title={title}
            tags={tags}
            host={host}
            rating={rating}
          />
          <div className="houseCollapses">
            <div className="houseDetails">
              <Collapse title="Description" content={description} />
            </div>
            <div className="houseDetails">
              <Collapse title="Équipements" content={equipments} />
            </div>
          </div>
        </main>
      )
    }
  }
}
