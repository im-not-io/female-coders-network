import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { pink } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
        
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));


export default function InteractiveList({ inviteList, setInviteList }) {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    console.log(inviteList)
    function removeFromInvites(name) {          // removes the element which equals to name 
        setInviteList(inviteList => inviteList.filter(function(value, index, arr){
            return !(value == name);
        })    )
        
    }
        


    return (
        <div className={classes.root}>
            <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.title}>
                    Invites send :
        </Typography>
                <div className={classes.demo}>
                    <List dense={dense}>
                        {inviteList.map(name => {

                            return (
                                <ListItem>
                                    <ListItemText
                                        primary={name}
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                    <ListItemSecondaryAction>
                                        <button size="small" variant="contained" color="primary" onClick={() => removeFromInvites(name)}>remove</button>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        })}
                </List>
                </div>
            </Grid>
        </div>


    )

    inviteList.map(name => {

        return (
            <div className={classes.root}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        Invites send :
            </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>

                            <ListItem>
                                <ListItemText
                                    primary={name}
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>,

            </List>
                    </div>
                </Grid>
            </div>
        )
    }

    );
}
