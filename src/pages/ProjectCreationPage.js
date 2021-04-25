import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    grid: {
        margin: theme.spacing(5),
    },
    button: {
        marginTop: theme.spacing(2)
    }
}));


export default function ProjectCreationPage() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleAge = (event) => {
        setAge(event.target.value);
    };
    const handleZone = (event) => {
        setTimeZone(event.target.value);
    };
    const [startDate, setStartDate] = React.useState(new Date('2021-04-25T21:11:54'));
    const handleStartDate = (date) => {
        setStartDate(date);
    };
    const [endDate, setEndDate] = React.useState(new Date('2021-04-25T21:11:54'));
    const handleEndDate = (date) => {
        setEndDate(date);
    };
    const [timezone, setTimeZone] = React.useState('');
    const buttonId = 'createProjectButton';

    function createProject() {
        
    }

    return (
        <div>
            <NavBar />
            <Grid container spacing={4} className={classes.grid} justify="left">
                <Grid item xs={4} justify="left">
                    <Typography variant="h1" component="h1">
                        Create a Project
                    </Typography>
                    <TextField label='Project Name' fullWidth />
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <Autocomplete
                                multiple
                                id="tags-filled"
                                options={topRoles.map((option) => option.title)}
                                freeSolo
                                renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField {...params} label="Desired Roles" placeholder="Roles" />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                onChange={handleAge}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="start"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="start-date"
                                        label="Start Date"
                                        value={startDate}
                                        onChange={handleStartDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'start date',
                                        }}
                                    />
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="end"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="end-date"
                                        label="End Date"
                                        value={endDate}
                                        onChange={handleEndDate}
                                        KeyboardButtonProps={{
                                            'aria-label': 'end date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <InputLabel id="demo-simple-select-error-label">Time Zone</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={timezone}
                                onChange={handleZone}
                            >
                                <MenuItem value={'Eastern'}>Eastern</MenuItem>
                                <MenuItem value={'Central'}>Central</MenuItem>
                                <MenuItem value={'Mountain'}>Mountain</MenuItem>
                                <MenuItem value={'Pacific'}>Pacific</MenuItem>
                                <MenuItem value={'Alaska'}>Alaska</MenuItem>
                                <MenuItem value={'Hawaiian-Aleutian'}>Hawaiian-Aleutian</MenuItem>
                                <MenuItem value={'American Samoa'}>American Samoa</MenuItem>
                                <MenuItem value={'Chamorro'}>Chamorro</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} className={classes.button}>
                            <Button id={buttonId} variant="contained" color="primary" fullWidth onClick={createProject} >
                                Create Project
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

const topRoles = [
    { title: 'Video Game Designer' },
    { title: 'Quality Assurance Engineer' },
    { title: 'Project Manager' },
    { title: 'Software Integration Engineer' },
    { title: 'Security Engineer' },
    { title: 'Front-end Engineer' },
    { title: 'Full-stack Engineer' },
    { title: '3D Graphics Developer' },
    { title: 'Data Scientist' },
    { title: 'Mobile Developer' },
    { title: 'Devops Engineer' },
    { title: 'Back-end Engineer' }
];
