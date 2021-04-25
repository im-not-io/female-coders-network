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
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import { useHistory } from "react-router-dom";


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
  alert: {
    textAlign: 'left !important'
  }
}));


export default function LoginPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const buttonId = 'loginButton';
  const history = useHistory();
  function login() {
    firebase.auth().signOut();
    const email = 'shion8822@gmail.com';
    const password = 'testPassword';
    setAnchorEl(document.getElementById(buttonId));
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user)
        history.push("/home");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        setErrorMessage(errorMessage);
        setOpen(true);
      });
  }
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid container spacing={3} className={classes.grid} justify="center">
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Typography variant="h1" component="h1">
              Sign In
          </Typography>
            <Grid container item xs={12} justify="center">
              <Grid item xs={12}>
                <TextField label='Email' fullWidth />
              </Grid>
            </Grid>
            <Grid container item xs={12} justify="center">
              <Grid item xs={12}>
                <TextField label='Password' fullWidth />
              </Grid>
            </Grid>
            <Grid container item xs={12} justify="center">
              <Grid item xs={12} className={classes.button}>
                <Button id={buttonId} variant="contained" color="primary" fullWidth onClick={login} >
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={12} className={classes.button}>
                <Collapse in={open}>
                  <Alert
                    severity="error"
                  ><Typography component='div' variant="body1" className={classes.alert}>
                      {errorMessage}
                  </Typography></Alert>
                </Collapse>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>

  );
}


