import React from 'react';
import NavBar from '../components/NavBar';
import bgImage from '../background.jpg'
import project from '../womanTyping.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ScatterPlot } from '@material-ui/icons';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingTop : "20px",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        padding : "50px",
        

    },
}));


export default function HomePage() {
    const classes = useStyles();
    
    return (
        <div 
            style={
                {
                    height: "100vh",
                    backgroundImage: "url(" + bgImage + ")",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }
            }>
            <NavBar /> {// maybe make transpart for homepage
            }

            <div className={classes.root}>
                <Grid container spacing={3} aligenItems = "center">
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            We help connect women in tech 
                        </Paper>
                    </Grid>
                    <Grid item xs={4}  justify="center" alignItems="center">
                        <Paper className={classes.paper}>
                            Explore and join tech projects led by women 
                            <div style={
                                {
                                    backgroundImage: "url(" + project + ")",
                                    padding: "10px",
                                    height : "50vh",
                                    width : "50vh"
                                }}>
                                PHOTO
                            </div>
                            <Button color="primary" variant="contained"> Find candidates for your project</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}  justify="center" alignItems="center">
                        <Paper className={classes.paper}>
                            Connect with other women in tech and take on projects together
                            <div>
                                PHOTO
                            </div>
                            <Button color="primary" variant="contained"> Find Projects to apply to</Button>
                        </Paper>
                    </Grid>

                </Grid>
            </div>
    </div>
  )}

