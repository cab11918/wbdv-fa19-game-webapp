import React from 'react'

import SearchBar from "../components/SearchBar";
import GameTable from "../components/GameTable";
import GameDetails from "../components/GameDetails";
import Grid from '@material-ui/core/Grid';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import NavBar from "../components/NavBar";

class SearchingPage extends React.Component {

  constructor(props) {

    super(props);

    this.handler = this.handler.bind(this);
    this.getDetails = this.getDetails.bind(this);

    this.state = {
      results: [],
      game: [],
      videoUrl: "",
      tags: []
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
    fetch("https://api.rawg.io/api/games?page_size=20")
    .then(response => response.json())
    .then(response => {
          this.setState({

            results: response.results

          })
        }
    )
  }

  getDetails(gameId) {
    fetch("https://api.rawg.io/api/games/" + gameId)
    .then(response => response.json())
    .then(response =>
        response.clip === null  ? this.setState({
              game: response,
              videoUrl: "",
              tags: response.tags
            }) :

            this.setState({
              game: response,
              videoUrl: response.clip.clip,
              tags: response.tags

            })
    )
  }

  render() {

    return (

        <div>

<NavBar/>
          <SearchBar action={this.handler}/>


          <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
          >

            <Grid item xs={6}>

              <GameTable results={this.state.results}
                         getDetails={this.getDetails}/>


            </Grid>

            <Grid item xs={6}>


              <GameDetails game={this.state.game}
                           videoUrl={this.state.videoUrl}
                           tags={this.state.tags}/>


            </Grid>

          </Grid>


        </div>




    )

  }

}

export default SearchingPage