import React, {useState, useEffect}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AirlineSeatLegroomNormal, CenterFocusStrong, EmojiObjects, SignalCellularNoSimOutlined } from '@material-ui/icons';
import { Collapse } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    backgroundColor : pink, // can't get it to work
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

});

// complete array 
const data = [
  {
    "nickname": "AnneVogel",
    "interests": ["AI", "Robots"],
    "skills": ["Javascript", "C++"],
  },
  {
    "nickname": "Nick-Nick",
    "interests": ["Drones", "Math"],
    "skills": ["React", "Fire"],
  },
  {
    "nickname": "Shionne",
    "interests": ["Dancing", "dogs"],
    "skills": ["C++", "Fire"],
  }
];



export default function SimpleCard({ setInviteList, inviteList }) {
  const classes = useStyles();
  function addToInvites(name) {
    setInviteList(inviteList.concat([name]))  // adds a name to the listInvites
  }

 // return data.map(n => {
    //let counter = 0 
    const [counter, setCounter] = useState(0)
    const n = data[counter]
    const name = n.nickname;
    const skills = n.skills.map(n => n + ", ");
    const interests = n.interests.map(n => n + ", ");
    useEffect(() => {
      console.log(counter)
    }, [counter])
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
        <CardActions style={{display: "grid", placeContent: "center"}}>
          <div  style={{display: "grid", columnGap: "10px", gridTemplateColumns: "auto auto auto"}}>
          <Button size="small" variant="contained" color="primary" button onClick={() => addToInvites(name)}>YES</Button>
          <Button size="small" variant="contained" color="secondary" button onClick={() => alert("You have removed an invitation")} >NO</Button>
          <Button size="small" color="secondary" button onClick={() => setCounter(counter => counter + 1)} >Next person</Button>
          </div>
        </CardActions>
      </Card>
    )

  


}
