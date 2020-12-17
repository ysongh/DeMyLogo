import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box, Card, CardContent, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import CreateIcon from '@material-ui/icons/Create';

import HeroImg from '../images/hero.png';
import Navbar from './layout/Navbar';

const useStyles = makeStyles(() => ({
  grow: { flexGrow: 1 },
  mt: { marginTop: '40px'},
  mb: { marginBottom: '60px'},
  header: {
    marginTop: '70px',
    marginBottom: '45px'
  },
  headerh1: {
    textTransform: 'uppercase',
    lineHeight: 1,
    marginTop: '40px'
  },
  headerP: {
    fontSize: '20px',
    marginTop: '15px',
    marginBottom: '15px'
  },
  btnPrimary: {
    marginRight: '15px',
    background: '#AC9742'
  },
  btnSecordary: {
    background: '#D2D868'
  },
  icon: {
    fontSize: '50px',
    paddingLeft: '20px'
  },
  cardText: {
    fontSize: '20px',
    marginTop: '10px'
  },
  subTitle: {
    textTransform: 'uppercase',
    marginTop: '20px',
    marginBottom: '20px'
  },
  listText: { fontSize: '20px' }
}));

const Home = () => {
  const classes = useStyles();

  return(
    <div>
      <Navbar />

      <Container>
        <header>
          <Grid className={classes.header} container spacing={7}>
            <Grid item sm={12} md={6}>
              <img className="fullwidthimage" src={HeroImg} alt="Hero" />
            </Grid>
            <Grid item sm={12} md={6}>
              <Typography className={classes.headerh1} variant="h3">
                Need help creating your logo
              </Typography>
              <Typography className={classes.headerP} variant="body1">
                Find a designer who can design your logo
              </Typography>
              <Box display="flex">
                <Button component={Link} to="/tasks" className={classes.btnPrimary} size="large">
                  Get Started
                </Button>
                <Button component={Link} to="/tasks" className={classes.btnSecordary} size="large">
                  See Bounty
                </Button>
              </Box>
            </Grid>
          </Grid>
        </header>

        <main>
          <section>
          <Typography className={classes.subTitle} variant="h3" align="center">
            Make it easy for you
          </Typography>

          <Grid className={classes.mb} container spacing={7}>
            <Grid item sm={12} md={4}>
              <Card className="secondary-color">
                <CardContent>
                  <Box display="flex">
                    <Typography variant="h4">
                      No Login Required
                    </Typography>
                    <LockOpenIcon className={classes.icon} />
                  </Box>
                  <Typography className={classes.cardText} variant="body1">
                    You do not need to create an account. You only need your crypto wallet.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={12} md={4}>
              <Card className="secondary-color">
                <CardContent>
                  <Box display="flex">
                    <Typography variant="h4">
                      Easy to Send Money
                    </Typography>
                    <MonetizationOnIcon className={classes.icon} />
                  </Box>
                  <Typography className={classes.cardText} variant="body1">
                    You do not need credit or debit card. You only need pay with your crypto wallet.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item sm={12} md={4}>
              <Card className="secondary-color">
                <CardContent>
                  <Box display="flex">
                    <Typography variant="h4">
                      More Logo Choice
                    </Typography>
                    <CreateIcon className={classes.icon} />
                  </Box>
                  <Typography className={classes.cardText} variant="body1">
                    You will likely get many logo submissions depending on the bounty you set.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          </section>

          <section>
          <Typography className={classes.subTitle} variant="h3" align="center">
            How it works
          </Typography>

          <Grid className={classes.mb} container spacing={7}>
            <Grid item sm={12} md={6}>
              <Card>
                <CardContent>
                  <Typography className={classes.mb} variant="h4">
                    For Companies
                  </Typography>
                  <Typography className={classes.listText} variant="body1">
                    1) Create a post with the requirement and bounty
                  </Typography>
                  <Typography className={classes.listText} variant="body1">
                    2) Wait for designers to upload their work
                  </Typography>
                  <Typography className={classes.listText} variant="body1">
                    3) Select the best logo and pay the winner with BNB
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item sm={12} md={6}>
              <Card>
                <CardContent>
                  <Typography className={classes.mb} variant="h4">
                    For Designers
                  </Typography>
                  <Typography className={classes.listText} variant="body1">
                    1) Find the task you would like to do
                  </Typography>
                  <Typography className={classes.listText} variant="body1">
                    2) Read the requirement and create the logo
                  </Typography>
                  <Typography className={classes.listText} variant="body1">
                    3) Upload the logo and put your wallet address
                  </Typography>
                  <Typography className={classes.listText} variant="body1">
                    4) Get paid if you are the winner
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          </section>
        </main>
      </Container>
    </div>
  )
}

export default Home;