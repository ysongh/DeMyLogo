import React from 'react';
import { AppBar, Container, Toolbar, Link, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import Logo from '../../images/logo.png';

const Navbar = ({ account }) => {
  return (
    <AppBar position="static" className="primary-color">
      <Container>
        <Toolbar disableGutters className="flexspace">
          <Link component={RouterLink} to="/">
            <img src={Logo} className="logo" alt="Logo" />
          </Link>
          <Typography variant="body2">
            { account }
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;