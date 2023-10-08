import React from 'react';
import { theme } from '../theme';
import { Box, Typography, Grid } from '@mui/material';
import EventCard from '../components/EventCard'

export default function Event() {
  return (
    <Box sx={{
      margin: 'auto',
      width: {
        xs: '90%',
        md: '80%',
      },
      color: '#ffffff',
      marginTop: '3rem'
    }}>
      <Typography variant="h4" align="center"
        sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', paddingX: '10px', color: theme.color }}
      >
        Upcoming <span style={{ color: theme.secondary }}>Events</span>
      </Typography>
      <Grid container spacing={2}
        sx={{
          padding: '10px',
          marginTop: '1rem',
          marginBottom: '1rem',
          display: 'flex',
          flexwrap: 'wrap',
          alignItems: 'center',


        }}>

        <Grid item xs={12} sm={6} md={4}>
          <EventCard title="Web Development" desc="
                    This is a WorkShop  on Web Development using ReactJS and NodeJS and MongoDB as backend..." date="October 10, 2021 " time="10:00 AM-12:00 PM" img="" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <EventCard title="Web Development" desc="
                    This is a WorkShop  on Web Development using ReactJS and NodeJS and MongoDB as backend..." date="October 10, 2021 " time="10:00 AM-12:00 PM" img="" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <EventCard title="Web Development" desc="
                    This is a WorkShop  on Web Development using ReactJS and NodeJS and MongoDB as backend..." date="October 10, 2021 " time="10:00 AM-12:00 PM" img="" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <EventCard title="Web Development" desc="
                    This is a WorkShop  on Web Development using ReactJS and NodeJS and MongoDB as backend..." date="October 10, 2021 " time="10:00 AM-12:00 PM" img="" />
        </Grid>

      </Grid>
    </Box>
  )
}
