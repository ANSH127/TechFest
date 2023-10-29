import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { theme } from '../theme';
import { client,builder } from '../api/SanityClient';


const Sponsor = () => {
  const [sponsor, setSponsor] = React.useState([]);

  React.useEffect(() => {
    const fetchSponsor = async () => {
      const sponsor = await client.fetch(`*[_type == "Sponsers"]`);
      setSponsor(sponsor);
    }
    fetchSponsor();
  }, []);

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
        {
          sponsor.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <img
                src={
                  builder.image(item.Image)
                    .width(300)
                    .height(150)
                    .url()
                }
                alt="sponsor"
                sx={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </Grid>
          ))

        }
      </Grid>
    </Container>
  );
};

export default Sponsor;
