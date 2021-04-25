import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from 'firebase/app';
import 'firebase/auth';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import { useHistory, useParams } from 'react-router-dom'
import PrivateProjectPage from './PrivateProjectPage';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        marginTop: theme.spacing(2)
    },
    headerImage: {
        width: "100%",
        height: "400px",
        objectFit: "cover"
    },
    paper: {
        padding: theme.spacing(2)
    }
}));


export default function ProjectPage() {
    const classes = useStyles();
    const { projectId } = useParams();
    const [data, setData] = React.useState();
    //If user is added to this project
    //show the private project page

    React.useEffect(() => {
        firebase.database().ref('projects').push().set({
            description: "Cool project description",
            mentor: {
                "name": "awesome mentor",
                "description": "description of mentor",
                "email": "ndigeron@uci.edu"
            },
            members: [
                {
                    name: "Member 1"
                },
                {
                    name: "Member 2"
                }
            ],
            links: [
                {
                    name: "Slack",
                    url: "https://slack.com"
                },
                {
                    name: "Discord",
                    url: "https://discord.com"
                }
            ]

        });
    }, [])

    React.useEffect(() => {
        console.log("current ref is", 'projects/' + projectId)
        firebase.database().ref('projects/' + projectId).on('value', (snapshot) => {
            const data = snapshot.val();
            setData(data);
        });
    }, [])


    if (data) {
        return (
            <PrivateProjectPage photoUrl="https://i.picsum.photos/id/554/400/300.jpg?hmac=pZSqo6vVwhX6HA8yKn6R5U4NfoRKicJfW-lvo2jmKRw"
                description="Cool project description"
                mentor={{
                    "name": "awesome mentor",
                    "description": "description of mentor",
                    "email": "ndigeron@uci.edu"
                }}
                members={
                    [
                        {
                            name: "Member 1"
                        },
                        {
                            name: "Member 2"
                        }
                    ]
                }
                links={
                    [
                        {
                            name: "Slack",
                            url: "https://slack.com"
                        },
                        {
                            name: "Discord",
                            url: "https://discord.com"
                        }
                    ]
                }
            />
        )
    } else {
        return (<div>Loading...</div>);
    }
}


