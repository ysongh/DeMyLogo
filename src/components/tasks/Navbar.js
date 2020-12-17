import React from 'react';
import { AppBar, Container, Toolbar, Link, Box, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Identicon from 'identicon.js';

import Logo from '../../images/logo.png';

const Navbar = ({ account }) => {
  return (
    <AppBar position="static" className="primary-color">
      <Container>
        <Toolbar disableGutters className="flexspace">
          <Link component={RouterLink} to="/">
            <img src={Logo} className="logo" alt="Logo" />
          </Link>
          
          <Box display="flex" alignItems="center">
            <Typography variant="body2">
              <a
                target="_blank"
                className="white-link"
                rel="noopener noreferrer"
                href={"https://etherscan.io/address/" + account}>
                {account.substring(0,10)}...{account.substring(32,42)}
              </a>
            </Typography>
            { account
              && <img
                width='30'
                height='30'
                src={`data:image/png;base64,${new Identicon(account, 30).toString()}`}
                alt="Icon" />
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;