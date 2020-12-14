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

const Tasks = ({ account }) => {
  const classes = useStyles();

  return (
    <div>
      <Box display="flex" alignItems="center">
        <Typography variant="h4" className={classes.grow}>
          Tasks
        </Typography>
        <Button className={classes.btnAdd} size="large">
          Create Task
        </Button>
      </Box>
      
      <Card className={classes.mb}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box display="flex">
                <Typography className={classes.grow} variant="h4">
                  Some Company
                </Typography>
                <Typography variant="h4">
                  $5
                </Typography>
              </Box>
              <Typography variant="body1">
                Need a logo with good colors and icons
              </Typography>
              <Button className={classes.btnView}>
                View
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box display='flex'>
                <Typography className={classes.grow} variant="h4">
                  Some Company
                </Typography>
                <Typography variant="h4">
                  $5
                </Typography>
              </Box>
              <Typography variant="body1">
                Need a logo with good colors and icons
              </Typography>
              <Button className={classes.btnView}>
                View
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default Tasks;