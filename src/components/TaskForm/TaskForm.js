import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../../actions/newTask";
import {
  TextField,
  Typography,
  Button,
  Paper,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@material-ui/core";

import useStyles from "./styles";

const colors = ["red", "orange", "green", "yellow", "blue", "indigo", "violet"];

const TaskForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const today = new Date();
  // const h = today.getHours();
  // const m = today.getMinutes();
  // const minutesPlusThirty = m + 30;
  // const currentTime = `${h + ":" + m}`;
  // let defaultEndTime = `${h + ":" + minutesPlusThirty}`;
  
  const [formData, setformData] = useState({
    task: "",
    startTime: "",
    endTime: "",
    color: "red",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask(formData));
    //setTasks([...tasks, formData]);
    // console.log(tasks);
    // console.log(currentTime);
    // console.log(formData);
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
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Color</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={formData.color}
            onChange={(e) => {
              setformData({ ...formData, color: e.target.value });
            }}
            label="Color"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {colors.map((color) => {
              return <MenuItem value={color}>{color}</MenuItem>;
            })}
          </Select>
        </FormControl>
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
