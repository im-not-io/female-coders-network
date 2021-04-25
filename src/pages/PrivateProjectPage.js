import React from 'react';
import NavBar from '../components/NavBar';
import bgImage from '../background.jpg';
import bgImage1 from '../background1.jpg';
import project from '../womanTyping.jpg';
import group from '../group.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ScatterPlot } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/database';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1, 
        "margin-top": "5%" 
       
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        padding : "15px"

    },

    ppp:{
        padding : "15px"
    }, 
}));



export default function PrivateProjectPage(props) {
    const classes = useStyles();
    
    return (
        <div 
            style={
                {
                    height: "125vh",
                    backgroundImage: "url(" + bgImage1 + ")",
                    backgroundRepeat: 'no-repeat',
                   
                }
            }>
            <NavBar />

            <div className={classes.root}>
                <Grid container spacing={10}  justify="space-evenly">
                    <Grid item xs={11} >
                        <Paper className={classes.paper}>
                        Private Project Page
                        <p>
                            On this page you can see the project that you have set up in your account. 
                            And if needed informations can be changed. 
                        </p>
                        </Paper>
                    </Grid>
                    <Grid item xs={11}>
                        <Paper className={classes.paper}>
                           <div className={classes.ppp}>
                                <img src={props.photoUrl} />
                           </div>
                           <div className={classes.ppp}>
                               {props.description} 
                           </div>
                           <div className={classes.ppp}>
                               <div>{props.mentor.name}</div>
                               <div>{props.mentor.description}</div>
                               <a href={"mailto:" + props.mentor.email}>Contact your mentor: {props.mentor.email}</a>
                           </div>
                           <div className={classes.ppp}>
                               <p> List of members</p>
                                {props.members.map((member) => {
                                    return <div>{member.name}</div>
                                })}
                           </div>
                           <div className={classes.ppp}>
                                {props.links.map((link) => {
                                    return <div><a href={link.url}>{link.name}</a></div>
                                })}
                           </div>
                           <div className={classes.ppp}>
                                <Button variant="contained">Edit project details</Button>
                           </div>


                        </Paper>
                    </Grid>
                </Grid>
            </div>
    </div>
  )}

