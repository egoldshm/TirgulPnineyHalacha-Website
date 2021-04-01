import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br />
      <h1> ברוך הבא לאתר המבחנים של פניני הלכה </h1>
    </div>
  );
}
