import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import withStyles from "@material-ui/core/styles/withStyles";
import {Typography} from "@material-ui/core";

const useStyles = ({
  root: {
    width: '98%',
    overflowX: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto'

  },
  table: {
    minWidth: 300,
    fontSize: 20
  },
  th: {
    fontSize: 15
  },
  tr: {
    fontSize: 13
  },
  img: {
    width: 60,
    height: 40,
    marginRight: 20,
    borderRadius: 5

  }
});

class SimpleTable extends React.Component {
  constructor(props) {

    super(props);

  }

  render() {
    const {classes} = this.props;

    return (

        <div className={classes.root}>


          <Paper className={classes.root} m="auto">

            <Table className={classes.table} aria-label="simple table">
              <TableHead className={classes.th}>
                <TableRow>
                  <TableCell>
                    <div className={classes.th}>Name</div>
                  </TableCell>


                  <TableCell align="right">
                    <div className={classes.th}>Release Date</div>
                  </TableCell>
                  <TableCell align="right">
                    <div className={classes.th}>Rating</div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.results.map(game => (
                    <TableRow key={game.id}>
                      <TableCell component="th" scope="row">
                        <div className={classes.tr}>
                          <img src={game.background_image}
                               className={classes.img}/>

                              <Link to={`/detail/${game.id}`}>
                                <a
                                   onClick={() => this.props.getDetails(
                                       game.id)}>{game.name}</a>
                              </Link>
                        </div>
                      </TableCell>

                      <TableCell align="right">
                        <div className={classes.tr}>{game.released}</div>
                      </TableCell>
                      <TableCell align="right">
                        <div className={classes.tr}>{game.rating}</div>
                      </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>

        </div>
    );
  }

}

export default withStyles(useStyles)(SimpleTable)
