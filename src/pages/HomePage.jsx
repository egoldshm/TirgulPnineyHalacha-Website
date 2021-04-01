import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container xs>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>לאתר פניני הלכה</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>אודות האתר</Paper>
        </Grid>
        <Grid item xs>
        <TextField className={classes.paper}>התחל מבחנים</TextField>
        </Grid>
      </Grid>
    </div>
  );
}
