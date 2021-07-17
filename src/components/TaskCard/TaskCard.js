import React, { useEffect, useState} from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import ProgressBar from "../ProgressBar/ProgressBar.js";

import useStyles from "./styles";
import moment from 'moment'

const TaskCard = () => {
  const [time, setTime] = useState(new Date())
  const [intervalId, setIntervalId] = useState(0)
  const classes = useStyles();
  const currentTime = moment().format('h:mm a')

  // const startTimer = () => {
  //   const timer = setInterval(() => {
  //     setTime(currentTime)
  //   }, 1000);
  //   setIntervalId(timer)
  // }
  
  const stopTimer = () => {
    clearInterval(intervalId)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(currentTime)
    }, 60 * 1000);
    setIntervalId(timer)
    return () => {
      stopTimer()
    }
  }, [time, currentTime])



  return (
    
      <Card className={classes.root} align="center">
        <CardContent className={classes.header}>
        <Typography variant="h1">{currentTime}</Typography>
        </CardContent>
        <CardContent className={classes.main}>
          <Typography variant="h3">Main</Typography>
        </CardContent>
        <CardContent className={classes.footer}>
          <Typography aligncenter variant="h1">Footer</Typography>
      </CardContent>
      <ProgressBar />
      <button onClick={stopTimer}>Stop</button>
      </Card>
  );
};

export default TaskCard;
