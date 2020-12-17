import React from 'react';
import { AppBar, Grid, Container, Toolbar, FormControl, TextField, InputAdornment, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const Footer = () => {
  return (
    <AppBar position="static" className="footer primary-color">
      <Container>
        <Toolbar disableGutters>
          <Grid container spacing={7}>
            <Grid item sm={12} md={3}>
              <Typography variant="h6">
                Quick Link
              </Typography>
              <Typography variant="body1">
                Home
              </Typography>
              <Typography variant="body1">
                Tasks
              </Typography>
              <Typography variant="body1">
                Add Tasks
              </Typography>
            </Grid>
            <Grid item sm={12} md={3}>
              <Typography variant="h6">
                Company
              </Typography>
              <Typography variant="body1">
                About Us
              </Typography>
              <Typography variant="body1">
                Meet the Team
              </Typography>
            </Grid>
            <Grid item sm={12} md={6} style={{ marginTop: '-15px'}}>
              <FormControl fullWidth={true} margin="normal">
                <Typography variant="h6">
                  Get Update from Us
                </Typography>
                <TextField
                  type="text"
                  name="amount"
                  color="primary"
                  placeholder="Enter Your Email"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SendIcon />
                      </InputAdornment>
                    ),
                  }} />
              </FormControl>
            </Grid>
          </Grid>
        </Toolbar>

        <hr style={{ marginTop: '30px'}} />

        <Typography variant="h6" align="center">
            Copyright &copy;{new Date().getFullYear()} DeMyLogo
          </Typography>
      </Container>
    </AppBar>
  );
}

export default Footer;