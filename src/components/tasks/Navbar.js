import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  }
}));

const Navbar = ({ account }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className="primary-color">
      <Container>
        <Toolbar disableGutters>
          <Typography variant="h6" className={classes.title}>
            DeMyLogo
          </Typography>
          <Typography variant="body2">
            { account }
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;