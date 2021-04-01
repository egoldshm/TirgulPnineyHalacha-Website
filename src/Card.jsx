import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import CustomizedRatings from "./Stars";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    justifyContent: "center",
    fontFamily: "Heebo"
  },
  title: {
    fontSize: 18
  },
  pos: {
    marginBottom: 12
  }
});

export default function MyCard(props) {
  const classes = useStyles();
  const [hidden, setIsHidden] = useState(false);
  const [textOfButton, setTextOfButton] = useState("הצג תשובה");

  function showAnswer() {
    setIsHidden(!hidden);
    if (hidden) setTextOfButton("הצג תשובה");
    else setTextOfButton("הסתר תשובה");
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          שאלה
        </Typography>
        <Typography dir="rtl" className={classes.pos} color="textSecondary">
          {props.question}
        </Typography>
        <Button onClick={showAnswer} variant="outlined" color="primary">
          {" "}
          {textOfButton}{" "}
        </Button>
        {hidden ? (
          <Grid alignItems="center">
            <Typography dir="rtl" variant="body2" component="p">
              <br /> {props.answer}
            </Typography>
            <br />
            <Divider variant="fullWidth" />
            <br />
            <CustomizedRatings />
          </Grid>
        ) : null}
      </CardContent>
    </Card>
  );
}
