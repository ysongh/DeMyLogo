import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, Box, CardContent, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  grow: { flexGrow: 1 },
  mb: { marginBottom: '15px'},
  btnAdd: {
    marginTop: '10px',
    marginBottom: '10px',
    background: '#AC9742'
  },
  btnView: {
    marginTop: '15px',
    background: '#D2D868'
  }
}));

const Tasks = ({ changeContent, getTaskDetail, tasks }) => {
  const classes = useStyles();

  return (
    <div>
      <Box display="flex" alignItems="center">
        <Typography variant="h4" className={classes.grow}>
          Tasks
        </Typography>
        <Button className={classes.btnAdd} size="large" onClick={() => changeContent(2)}>
          Create Task
        </Button>
      </Box>

      { tasks.map(task => {
        return(
          <Card className={classes.mb} key={task.taskId}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box display="flex">
                    <Typography className={classes.grow} variant="h4">
                      { task.name }
                    </Typography>
                    <Typography variant="h4">
                      { task.amount }
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    { task.description }
                  </Typography>
                  <Button className={classes.btnView} onClick={() => getTaskDetail(task.taskId)}>
                    View
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        )
      })}
    </div>
  );
}

export default Tasks;