import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    justifyContent: 'center',
    fontFamily: "Heebo"
  },
  title: {
    fontSize: 18,
    
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MyCard(props) {
  const classes = useStyles();
  const [hidden, setIsHidden] = useState(false);
  const [textOfButton, setTextOfButton] = useState("הצג תשובה");
  
  function showAnswer()
  {
    setIsHidden(!hidden)
    if(hidden)
      setTextOfButton("הצג תשובה")
    else
    setTextOfButton("הסתר תשובה")

    
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
        <Button onClick={showAnswer} variant="outlined" color="primary"> {textOfButton} </Button>
        {hidden? <Typography dir="rtl" variant="body2" component="p">
        <br/> {props.answer}
        </Typography> : null}
      </CardContent>
    </Card>
  );
}
