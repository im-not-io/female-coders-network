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
       
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        padding : "15px"

    },
}));


export default function privatePojectPage() {
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
                    <h1>test</h1>
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper className={classes.paper}>
                            
                        </Paper>
                    </Grid>
                    <Grid item xs={5}>
                        <Paper className={classes.paper}>
                            xs5
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.footpage}>
                            xs12
                        </Paper>
                    </Grid>

                </Grid>
            </div>
    </div>
  )}

