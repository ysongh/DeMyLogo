import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, FormControl, TextField, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mt: { marginTop: '20px'},
  mb: { marginBottom: '10px'},
  btn: {
    marginTop: '10px',
    marginBottom: '10px',
    background: '#AC9742'
  },
}));

const AddTask = ({ changeContent, createTasks }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [instruction, setInstruction] = useState('');
  const [contact, setContact] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState('');

  const onSubmit = () => {
    createTasks(name, instruction, contact, amount);
  }

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={9} md={6}>
        <Card className={classes.mt}>
          <CardContent>
            <Typography className="primary-textColor" variant="h5" paragraph align="center">
              Create Task
            </Typography>
            
            <form className="mb-2">
              <FormControl fullWidth={true} margin="normal">
                <TextField
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  label="Company Name"
                  variant="outlined" />
              </FormControl>

              <FormControl fullWidth={true} margin="normal">
                <TextField
                  name="instruction"
                  value={instruction}
                  onChange={e => setInstruction(e.target.value)}
                  label="Instruction"
                  variant="outlined"
                  rows={5} 
                  multiline />
              </FormControl>

              <FormControl fullWidth={true} margin="normal">
                <TextField
                  name="contact"
                  value={contact}
                  onChange={e => setContact(e.target.value)}
                  label="Contact Information"
                  variant="outlined"
                  rows={5} 
                  multiline />
              </FormControl>

              <FormControl fullWidth={true} margin="normal">
                <TextField
                  type="text"
                  name="walletAddress"
                  value={walletAddress}
                  onChange={e => setWalletAddress(e.target.value)}
                  label="Wallet Address"
                  variant="outlined" />
              </FormControl>

              <FormControl fullWidth={true} margin="normal">
                <TextField
                  type="text"
                  name="amount"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  label="Amount"
                  variant="outlined" />
              </FormControl>

              <Button className={classes.btn} variant="contained" fullWidth onClick={() => onSubmit()}>
                Submit
              </Button>

              <Button variant="contained" fullWidth onClick={() => changeContent(1)}>
                Back
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AddTask;