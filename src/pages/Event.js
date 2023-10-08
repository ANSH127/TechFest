import React, { useEffect } from 'react';
import { theme } from '../theme';
import { Box, Typography, Grid } from '@mui/material';
import EventCard from '../components/EventCard'
import { client, builder } from '../api/SanityClient';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function Event() {


  const [events, setEvents] = React.useState([]);





  useEffect(() => {
    const fetchEvents = async () => {
      const events = await client.fetch(`*[_type == "Events"] | order(_updatedAt desc) `);
      setEvents(events);
    }
    fetchEvents();

  }, [])

  if (events.length === 0) return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )


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
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event._id}>
            <EventCard title={event.Title} desc={event.Description} date={event.Date} time={event.time} img={builder.image(event.Image).url()} />
          </Grid>
        ))

        }


      </Grid>
    </Box>

  )
}
