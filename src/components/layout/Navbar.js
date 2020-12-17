import React from 'react';
import { AppBar, Container, Toolbar, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

import Logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <AppBar position="static" className="primary-color">
      <Container>
        <Toolbar disableGutters className="flexspace">
          <Link component={RouterLink} to="/">
            <img src={Logo} className="logo" alt="Logo" />
          </Link>
          <div>
            <Link className="white-link" component={RouterLink} to="/">
              Home
            </Link>
            <Link className="white-link" component={RouterLink} to="/">
              About
            </Link>
            <Link className="white-link" component={RouterLink} to="/tasks">
              Tasks
            </Link>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;