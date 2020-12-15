import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Card, FormGroup, FormControlLabel, Checkbox, Box, CardContent, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  grow: { flexGrow: 1 },
  mb: { marginBottom: '15px'},
  paper: {
    padding: '15px'
  },
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

      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={3}>
            <Typography className={classes.grow} variant="h6">
              Reward Range:
            </Typography>

            <FormGroup col>
              <FormControlLabel control={<Checkbox name="price" />} label="1 - 10" />
              <FormControlLabel control={<Checkbox name="price" />} label="11 - 20" />
              <FormControlLabel control={<Checkbox name="price" />} label="21 - 50" />
              <FormControlLabel control={<Checkbox name="price" />} label="51 - 100" />
              <FormControlLabel control={<Checkbox name="price" />} label="101 - 1000" />
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
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
        </Grid>
      </Grid>
    </div>
  );
}

export default Tasks;