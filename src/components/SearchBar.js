import React from 'react'

import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import grey from '@material-ui/core/colors/grey';
import {Link} from "react-router-dom";
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import withStyles from "@material-ui/core/styles/withStyles";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from "@material-ui/core/Grid";

const useStyles = (theme => ({

  root: {
    padding: '2px 4px',
    marginTop: '50px',
    marginBottom: '50px',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '400px'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 25,

  },
  iconButton: {
    padding: 10,

  },
  fab: {
    backgroundColor: grey[600]
  },
  backicon: {
    fontSize: 25
  }

}));

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      reNav:"/"
    }

  }

  enterPressed(event) {
    let code = event.keyCode || event.which;
    if (code === 13) {

      this.props.action(this.state.search)
    }
  }

  componentDidMount() {
    if (typeof (this.props.userId) == 'undefined') {

    } else {
        this.setState({

          reNav:"/user/"+this.props.userId,


      })
    }
  }

  render() {
    const {classes} = this.props;

    return (

        <React.Fragment>


          <Container maxWidth="sm" className={classes.container}>

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >

              <Link to={this.state.reNav}>
                <Fab className={classes.fab} color="primary" aria-label="add">
                  <ArrowBackIcon className={classes.backicon}/>
                </Fab>

              </Link>


              <Paper className={classes.root}>


                <InputBase
                    className={classes.input}
                    placeholder="Search game"
                    inputProps={{'aria-label': 'Search game'}}
                    onChange={(event) => this.setState({
                      search: event.target.value
                    })}
                    onKeyPress={this.enterPressed.bind(this)}
                />
                <IconButton className={classes.iconButton} aria-label="search"
                            onClick={(
                                event => this.props.action(this.state.search))}


                >
                  <SearchIcon/>
                </IconButton>

              </Paper>
            </Grid>

          </Container>
        </React.Fragment>
    )
  }

}

export default withStyles(useStyles)(SearchBar)

