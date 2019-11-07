import React from 'react'

import SearchBar from "../components/SearchBar";
import GameTable from "../components/GameTable";

class SearchingPage extends React.Component {

  constructor(props) {

    super(props);

    this.handler = this.handler.bind(this);

    this.state = {
      results: []
    }

  }

  handler(search) {
    fetch("https://api.rawg.io/api/games?search=" + search)
    .then(response => response.json())
    .then(response => {
          this.setState({

            results: response.results

          })
        }
    )
  }

  componentDidMount() {
    fetch("https://api.rawg.io/api/games?page_size=10")
    .then(response => response.json())
    .then(response => {
          this.setState({

            results: response.results

          })
        }
    )
  }

  render() {

    return (
        <div>

          <SearchBar action={this.handler}/>

          <GameTable results={this.state.results}/>


        </div>
    )

  }

}

export default SearchingPage