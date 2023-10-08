import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { theme } from '../theme';


const Sponsor = () => {

  return (
    <Container maxWidth="lg"
      sx={{
        marginTop: '3rem',
      }}
    >
      <Typography variant="h4" align="center"
        sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', paddingX: '10px' }}
      >
        Our <span style={{ color: theme.secondary }}>Sponsors</span>
      </Typography>
      <Grid container spacing={3}
        sx={{ marginY: '20px' }}
      >
        <Grid item  xs={12} sm={6} md={4}>
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
