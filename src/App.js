import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LoginPage from './pages/LoginPage';
import SearchForTeammatesPage from './pages/SearchForTeammatesPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route path="/login/">
            <LoginPage />
          </Route>
          <Route path="/search-for-teammates">
            <SearchForTeammatesPage />
          </Route>
          <Route path="/">
            home
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
