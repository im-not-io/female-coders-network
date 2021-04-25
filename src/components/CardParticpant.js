import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AirlineSeatLegroomNormal, CenterFocusStrong, EmojiObjects, SignalCellularNoSimOutlined } from '@material-ui/icons';

import firebase from 'firebase/app';
import 'firebase/database';

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

});

// complete array 
/*const data = [
  {
    "nickname": "Anne-Merel",
    "interests": ["AI", "Robots", "Drones"],
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
  },
  {
    "nickname": "Tom",
    "interests": ["Flutter", "nature"],
    "skills": ["UI", "UX"],
  },
  {
    "nickname": "Eva",
    "interests": ["Design", "Comic Books"],
    "skills": ["3D-development", "UX-experiences"],
  }
]; */


export default function SimpleCard({ setInviteList, inviteList }) {
  const classes = useStyles();

  const [data, setData] = React.useState([])

  /*React.useEffect(() => {
      firebase.database().ref('people').set(data);
    }) */

  React.useEffect(() => {
    console.log("get firebase")
    firebase.database().ref('people').on('value', (snapshot) => {
      const candidates = snapshot.val();
      console.log(candidates);
      setData(candidates); 
    });
  }, []);

  function addToInvites(name) {
    setInviteList(inviteList.concat([name]))  // adds a name to the listInvites
  }

  const [counter, setCounter] = useState(0)

  useEffect(() => {
  }, [counter])

  if (data.length == 0) {
    return <div></div>
  } else {
    const n = data[counter]
    const length = Object.entries(data).length;
    const name = n.nickname;
    const skills = n.skills.map(n => n + ", ");
    const interests = n.interests.map(n => n + ", ");

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
        <CardActions style={{ display: "grid", placeContent: "center" }}>
          <div style={{ display: "grid", columnGap: "10px", gridTemplateColumns: "auto auto auto" }}>
            <Button size="small" variant="contained" color="primary" button onClick={() => addToInvites(name)}>YES</Button>
            <Button size="small" variant="contained" color="secondary" button onClick={() => alert("You have permantly deleted a candidate")} >NO</Button>
            <Button size="small" color="secondary" button onClick={() => setCounter(counter => (counter + 1) % length)} >Next person</Button>
          </div>
        </CardActions>
      </Card>
    )
  }


}
