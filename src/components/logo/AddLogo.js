import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DropzoneDialog } from 'material-ui-dropzone';
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

const AddLogo = ({ changeContent }) => {
  const classes = useStyles();
  const [walletAddress, setWalletAddress] = useState('');
  const [email, setEmail] = useState('');
  const [openUpload, setOpenUpload] = useState(false);
  const [buffer, setBuffer] = useState('');

  const handleFileClose = () => {
    setOpenUpload(false);
  }

  const handleFileSave = files => {
    const file = files[0];
    const reader = new window.FileReader();

    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      setBuffer(Buffer(reader.result));
    }
    setOpenUpload(false);
  }

  const handleFileOpen = () => {
    setOpenUpload(true);
  }

  const onSubmit = () => {
    console.log(walletAddress, email, buffer);
  }

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={9} md={6}>
        <Card className={classes.mt}>
          <CardContent>
            <Typography className="primary-textColor" variant="h5" paragraph align="center">
              Create Logo
            </Typography>
            
            <form className="mb-2">
              <Button className="secondary-color" variant="contained" size="large" onClick={() => handleFileOpen()}>
                Add Image
              </Button>

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
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  label="Email"
                  variant="outlined" />
              </FormControl>

              <Button className={classes.btn} variant="contained" fullWidth onClick={() => onSubmit()}>
                Submit
              </Button>

              <Button variant="contained" fullWidth onClick={() => changeContent(3)}>
                Back
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>

      <DropzoneDialog
        open={openUpload}
        onSave={(e) => handleFileSave(e)}
        acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
        showPreviews={true}
        maxFileSize={5000000}
        onClose={() => handleFileClose()}
      />
    </Grid>
  );
}

export default AddLogo;