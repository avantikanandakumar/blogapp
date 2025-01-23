import React from 'react'
import Grid from '@mui/material/Grid2';
import {Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
<Grid container spacing={2}>
  <Grid size={{ xs: 6, md: 6 }}>
   <TextField fullWidth label='Name' variant='outlined'></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='Email' variant='outlined'></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='Password' variant='outlined'></TextField>
  </Grid>
  <Grid size={{ xs: 6, md: 6 }}>
  <TextField fullWidth label='Phone' variant='outlined'></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
  <TextField fullWidth label='Address' variant='outlined'multiline
    rows={4}></TextField>
      </Grid>
    <Grid size={{ xs: 12, md: 12 }}>
        <Button color='secondary' variant='contained '>SignUp</Button>
    </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
    <Link to={'/'} style={{color:'black'}}>Already Registered?Login here</Link>
    </Grid>

</Grid>

    </div>
  )
}

export default Signup