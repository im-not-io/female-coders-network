import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import SimpleCard from '../components/CardParticpant';



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
  },

  participantToSwipe: {
    marginTop: "25px"  
  },


  invites:{
    marginTop: "25px"
  }
}));


const data = { 
  0 : {
    "nickname"  : "AnneVogel", 
    "interests" : {"interest1" : "AI", "interest2" : "Robots"},
    "skills"    : {"interest1" : "Javascript", "interest2" : "C++"},
  },
  1 : {
    "nickname"  : "NickNick", 
    "interests" : {"interest1" : "Drones", "interest2" : "Math"},
    "skills"    : {"interest1" : "React", "interest2" : "Fire"},
  }
};



export default function SearchForTeammatesPage() {
  const classes = useStyles();
    return (
      <div className = "bckgSearch">
        <NavBar />
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={12}>
            <div className={classes.paper}>
              <h1>Search for teammates page</h1>
              <p>Description about how the swipey thing works </p>
                <div id="cards" className = {classes.participantToSwipe}>
                  {/*<SimpleCard />*/}           
                </div> 
   
              <div className={classes.invites}> 
                
                <h3>Invites send : </h3>
                <div id="invites">
                  
                </div> 
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

    );
}
  

  