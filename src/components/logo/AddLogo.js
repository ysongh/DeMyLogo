import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DropzoneDialog } from 'material-ui-dropzone';
import { Grid, Card, CardContent, FormControl, TextField, Typography, CircularProgress, Button } from '@material-ui/core';
import ipfsClient from 'ipfs-http-client';

const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

const useStyles = makeStyles(() => ({
  mt: { marginTop: '20px'},
  mb: { marginBottom: '10px'},
  btn: {
    marginTop: '10px',
    marginBottom: '10px',
    background: '#AC9742'
  },
}));

const AddLogo = ({ changeContent, createLogo, loading }) => {
  const classes = useStyles();
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
    ipfs.add(buffer, (error, result) => {
      if(error) {
        console.error(error);
      }
      createLogo(result[0].hash, email);
    });
  }

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={9} md={5}>
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
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  label="Email"
                  variant="outlined" />
              </FormControl>

              { loading 
                ? <CircularProgress className="spinner" size={60} />
                : <Button className={classes.btn} variant="contained" fullWidth onClick={() => onSubmit()}>
                    Submit
                  </Button>
              }
              
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