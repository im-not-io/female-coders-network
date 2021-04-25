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
}));


export default function HomePage() {
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
            <NavBar /> {// maybe make transpart for homepage
            }

            <div className={classes.root}>
                <Grid container spacing={10}  justify="space-evenly">
                    <Grid item xs={11} >
                        <Paper className={classes.paper}>
                            We help connect women in tech 
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper className={classes.paper}>
                            <p padding="10px">Explore and join tech projects led by women</p>
                            <div style={
                                {
                                    backgroundImage: "url(" + project + ")",
                                    padding: "10px", 
                                    height: "450px",
                                    widht: "auto", 
                                    backgroundSize: "cover",
                                    borderRadius: "5px"

                            
                                }}></div>
                                <p></p>
                            <Button padding="40px" color="primary" variant="contained" onClick={() => window.location = "/search-for-teammates" }>Find candidates for your project</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper className={classes.paper}>
                           <p padding="10px"> Connect with other women in tech and take on projects together</p>
                            <div style={
                                {
                                    backgroundImage: "url("+group+")", 
                                    padding: "10px", 
                                    height: "450px",
                                    widht: "auto", 
                                    backgroundSize: "cover",
                                    borderRadius: "5px"
                                }
                            }></div>
                            <p></p>
                            <Button padding="40px" color="primary" variant="contained" onClick={() => window.location = "/projects" }> Find Projects to apply to</Button>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
    </div>
  )}

