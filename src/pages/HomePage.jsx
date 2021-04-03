import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import {getAllBooks} from "../datebase/readFirebase"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 1,
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
}));


export default function HomePage() {
  const classes = useStyles();
  const [keys, setKeys] = useState(["hello"]);
  useEffect(() => {
    return () => {
    getAllBooks().then(keys => {setKeys(keys);
    }).catch((e)=>console.log("ERROR" + e)).finally(()=>console.log("end"));
    }}, [])
    
  return (
    <div className={classes.root}>
    <br/>
      <Grid container spacing={4}>
    
    {keys.map((item) => <Grid item xs={6}>
    <Paper to="abo" className={classes.paper}>{item}</Paper>
    </Grid>)}
    
    </Grid>
    </div>
  );
};
