import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from 'firebase/app';
import 'firebase/auth';
import Popover from '@material-ui/core/Popover';
//import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid: {
    marginTop: theme.spacing(2)
  },
  button: {
    marginTop: theme.spacing(2)
  },
  popover: {
    padding: theme.spacing(2)
  }
}));


export default function LoginPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState('test string');
  const buttonId = 'loginButton';
  function login() {
    firebase.auth().signOut();
    const email = 'shion2@gmail.com';
    const password = 'wrong';
    setAnchorEl(document.getElementById(buttonId));
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  }
  
  const handleClick = (event) => {
    setAnchorEl(document.getElementById(buttonId));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const id = open ? 'error-popover' : undefined;
  return (
    <div>
      <NavBar />
      <Grid container spacing={3} className={classes.grid} justify="center">
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography variant="h1" component="h1">
              Sign In
          </Typography>
            <Grid container xs={12} justify="center">
              <Grid item xs={6}>
                <TextField label='Email' fullWidth />
              </Grid>
            </Grid>
            <Grid container xs={12} justify="center">
              <Grid item xs={6}>
                <TextField label='Password' fullWidth />
              </Grid>
            </Grid>
            <Grid container xs={12} justify="center">
              <Grid item xs={6} className={classes.button}>
                <Button id={buttonId} variant="contained" color="primary" fullWidth onClick={login} >
                  Sign In
              </Button>
                <Popover
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                ><Typography variant="body1" component="span" className={classes.popover}>
                    {errorMessage}
                </Typography></Popover>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>

  );
}


