import React, { useState } from "react";
import { TextField, Typography, Button, Paper } from "@material-ui/core";

import useStyles from "./styles";


const TaskForm = () => {
  const classes = useStyles();
  const today = new Date()
  const h = today.getHours()
  const m = today.getMinutes()
  const minutesPlusThirty = m + 30
  const currentTime = `${h + ":" + m}`
  let defaultEndTime = `${h + ":" + minutesPlusThirty}`


  const [formData, setformData] = useState({
    task: "",
    startTime: currentTime,
    endTime: defaultEndTime,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    console.log(currentTime);
    console.log(formData);
  };

  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Create a new Task</Typography>
        <TextField
          name="task"
          variant="outlined"
          label="Task Name"
          fullWidth
          value={formData.task}
          onChange={(e) => setformData({ ...formData, task: e.target.value })}
        />
        <TextField
          id="startTime"
          label="Start Time"
          type="time"
          defaultValue={currentTime}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          onChange={(e) => {
            setformData({ ...formData, startTime: e.target.value });
          }}
        />
        <TextField
          id="endTime"
          label="End Time"
          type="time"
          defaultValue={defaultEndTime}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
          onChange={(e) => {
            setformData({ ...formData, endTime: e.target.value });
          }}
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default TaskForm;
