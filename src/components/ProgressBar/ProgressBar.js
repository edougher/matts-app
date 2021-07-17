import React, { useState } from 'react';
import { LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';



const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 50,
      borderRadius: 25,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);

const ProgressBar = (props) => {
  const [formData, setformdata] = useState()
  return (
      <h5>{formData}</h5>,
        <BorderLinearProgress variant="determinate" value={null} />
    )
}

export default ProgressBar;