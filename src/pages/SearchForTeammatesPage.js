import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from '../components/CardParticpant';
import ListParticipant from '../components/ListParticipants';
import ListInvites from '../components/ListInvites';
import { pink } from '@material-ui/core/colors';
import { FreeBreakfast } from '@material-ui/icons';
import Button from '@material-ui/core/Button';

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
    marginTop: "25px",
  },

  participantToSwipe: {
    marginTop: "25px"
  },


  invites: {
    marginTop: "25px"
  }
}));



export default function SearchForTeammatesPage() {
  const [inviteList, setInviteList] = React.useState([]);
  const classes = useStyles();
  return (
    <div className="bckgSearch">
      <NavBar />
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={12}>
          <div className={classes.paper}>
            <h1>Search for teammates page</h1>
            <p>
              <h3><u>Description</u></h3>
               On each card there are three buttons: yes, no, next person. Each of them have seperate function: 
              <list>
                <li>Yes : sends a invite to work on your project to the person and it adds </li>
                <li>No  : means that you don't want to work with this person on your project</li>
                <li>Next Person : means that you can't make a decision yet, and just want to move on to the next one</li>
              </list>


              When you list have listed multiple candidates for your project. There are also some button, where you can manupulate the list itself: 
              <list>
                <li>Remove: removes a person from the invite list</li>
                <li>Send an ... this list : sends a invite to work on your project to all the people on the list</li>
              </list>

            </p>
            <div id="cards" className={classes.participantToSwipe}>

              <SimpleCard setInviteList={setInviteList} inviteList={inviteList} />
            </div>

            <div className={classes.invites}>

              <div id="invites">
                <ListInvites inviteList={inviteList} setInviteList={setInviteList} />
                <Button color="primary" variant="contained" >Send an invitation to all the people in this list </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>

  );
}


