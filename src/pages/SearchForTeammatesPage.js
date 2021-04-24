import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid: {
    marginTop: "25px"
  }
}));

export default function SearchForTeammatesPage() {
  const classes = useStyles();
    return (
      <div>
        <NavBar />
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Search for teammates page</Paper>
          </Grid>
        </Grid>
      </div>

    );
}
  

  