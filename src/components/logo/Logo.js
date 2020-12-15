import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mt: { marginTop: '15px'},
  btn: {
    marginTop: '15px',
    background: '#D2D868'
  }
}));

const Logo = ({ logos }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.mt} container spacing={3}>
      { logos.map(logo => {
        return(
          <Grid item xs={6} md={4} lg={3}>
            <Card className={classes.mb} key={logo.logoId}>
              <CardContent>
                <img src={`https://ipfs.infura.io/ipfs/${logo.fileHash}`}/>
                <Typography variant="h6">
                  { logo.email }
                </Typography>

                <Button className={classes.btn} fullWidth>
                  Pay
                </Button>
              </CardContent>
            </Card>
          </Grid>
        )
      })}
    </Grid>
  );
}

export default Logo;