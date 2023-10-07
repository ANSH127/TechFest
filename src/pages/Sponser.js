import React from 'react';
import { Container, Grid, Typography } from '@mui/material';


const Sponsor = () => {

  return (
    <Container maxWidth="lg" 
    sx={{
      marginTop:'20px',
      marginBottom:'20px',
    }}
    >
      <Typography variant="h4" gutterBottom>
        Our Sponsors
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <img
            src="https://via.placeholder.com/300x150"
            alt="sponsor"
            sx={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img
            src="https://via.placeholder.com/300x150"
            alt="sponsor"
            
            sx={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <img
            src="https://via.placeholder.com/300x150"
            alt="sponsor"
            
            sx={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Sponsor;
