import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import ProjectCreationPage from './pages/ProjectCreationPage'
import SearchForTeammatesPage from './pages/SearchForTeammatesPage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import firebase from 'firebase/app';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ7UxXBsRU7KPuTm-EgC-lsAChodRNJ4E",
  authDomain: "female-coders-network.firebaseapp.com",
  databaseURL: "https://female-coders-network-default-rtdb.firebaseio.com",
  projectId: "female-coders-network",
  storageBucket: "female-coders-network.appspot.com",
  messagingSenderId: "940123028784",
  appId: "1:940123028784:web:bd485085ae1fbeeb6e5cf5",
  measurementId: "G-2J014V96VG"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

const theme = createMuiTheme({
  typography: {
    h1:{
      fontSize:'2rem',
      color:'black',
      fontWeight:'bold'
    }
  },
});

function App() {
  return (
    <div className="App">
    <ThemeProvider theme={theme}>      
      <Router>
      <div>
        <Switch>
          <Route path="/login/">
            <LoginPage />
          </Route>
          <Route path="/create-account/">
            <CreateAccountPage />
          </Route>
          <Route path="/search-for-teammates">
            <SearchForTeammatesPage />
          </Route>
          <Route path="/project-creation">
            <ProjectCreationPage />
          </Route>
          <Route path="/">
            home
          </Route>
        </Switch>
      </div>
    </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
