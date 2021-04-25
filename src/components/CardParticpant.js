import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AirlineSeatLegroomNormal, CenterFocusStrong, EmojiObjects, SignalCellularNoSimOutlined } from '@material-ui/icons';
import { Collapse } from '@material-ui/core';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  yesno: {
    
  }
});

// complete array 
const data = [
  {
    "nickname"  : "AnneVogel", 
    "interests" : ["AI", "Robots"],
    "skills"    : ["Javascript","C++"],
  },
  {
    "nickname"  : "NickNick", 
    "interests" : ["Drones", "Math"],
    "skills"    : ["React", "Fire"],
  }
];



export default function SimpleCard({setInviteList, inviteList}) {
  const classes = useStyles();
  function addToInvites(name) {
      setInviteList(inviteList.concat([name])) 
  }


  return data.map(n => {
        const name = n.nickname;
        const skills = n.skills; 
        const interests = n.interests; 

        

        //console.log(n.nickname);
        return (  
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {skills}
              </Typography>
              <Typography variant="body2" component="p">
                {interests} 
                <br />
                Javascript, C++, HTML 
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" className={classes.yesno}  button onClick={() => addToInvites(name)}>YES</Button>
              <Button size="small" className={classes.yesno}  >NO</Button>
            </CardActions>
          </Card> 
        )
        })
     
}

function addToInvites(name){
 
    //card
    console.log(name)
    changeCards();  
} 

function changeCards(){
   //TO DO get rid of the cards that we already yes/no 
  console.log("card are removed")
}