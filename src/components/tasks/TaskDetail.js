import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  grow: { flexGrow: 1 },
  mt: { marginTop: '10px'},
  btnAdd: {
    marginTop: '10px',
    marginBottom: '10px',
    background: '#AC9742'
  },
  paper: {
    marginTop: '10px',
    padding: '15px'
  }
}));

const TaskDetail = ({ changeContent, currentTask }) => {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.mt} variant="contained" size="large" onClick={() => changeContent(1)}>
        Back
      </Button>
      <Paper className={classes.paper}>
        <Box display="flex" alignItems="center">
          <Typography className={classes.grow} variant="h4" gutterBottom>
            Tasks
          </Typography>
          <Typography variant="h4">
            { currentTask.amount }
          </Typography>
        </Box>
        <Typography variant="body1" gutterBottom>
          <strong>Logo Name:</strong> { currentTask.name }
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Instruction:</strong> { currentTask.description }
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Contact Info:</strong> { currentTask.contact }
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography className={classes.grow} variant="body1" gutterBottom>
            Posted On Dec 7, 2020
          </Typography>
          <Button className={classes.btnAdd} size="large">
            Upload Logo
          </Button>
        </Box>
      </Paper>
    </div>
  );
}

export default TaskDetail;