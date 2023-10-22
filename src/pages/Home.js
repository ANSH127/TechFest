import React from 'react';
import { Grid, Typography, Card, CardMedia, Box } from '@mui/material';
import { theme } from '../theme';
import { Typewriter } from 'react-simple-typewriter'
import EventCard from '../components/EventCard';
import { client,builder } from '../api/SanityClient';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const HomePage = () => {
  const [events, setEvents] = React.useState([]);

    React.useEffect(() => {
        const fetchEvents = async () => {
            const events = await client.fetch(`*[_type == "Events"] | order(Date asc)[0...3] `);
            setEvents(events);
        }
        fetchEvents();

    }, [])

    if (!events) return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* //make a grid  in one side there is a image and in other side there is a text */}
            <Grid container spacing={0} sx={{ marginTop: '2rem' }}>
                <Grid item xs={12} md={7}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                    <img src='./images/tech.gif' alt="hero"
                        style={{ width: '100%', height: '100%' }}
                    />

                </Grid>
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', paddingX: '10px' }}>
                            DISCOVER  <span style={{ color: theme.secondary }}>TECHFEST</span> 2023

                        </Typography>
                        <Typography
                            variant="h6"
                            component="h2"
                            gutterBottom
                            sx={{
                                display: 'inline-block', fontFamily: 'monospace', fontWeight: 400, letterSpacing: '.2rem'
                                , backgroundColor: theme.secondary, padding: '0.3rem', borderRadius: '0.5rem', color: theme.color
                            }}

                        >
                            <Typewriter
                                words={['Explore', 'Create', 'Showcase']}
                                loop={0}
                                cursor
                                cursorStyle=''
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </Typography>
                    </Box>

                </Grid>


            </Grid>
            {/* upcoming events */}
            <Grid item xs={12} sx={{ marginY: "20px" }} >
                <Typography variant="h4" align="center"
                    sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', paddingX: '10px' }}
                >
                    Upcoming <span style={{ color: theme.secondary }}>Events</span>
                </Typography>
            </Grid>
            <Grid container spacing={2} sx={{ paddingX: '10px' }} >
                {events.map((event) => (
                    <Grid item xs={12} sm={6} md={4} key={event._id}>
                        <EventCard title={event.Title} desc={event.Description} date={event.Date} time={event.time} img={builder.image(event.Image).url()}
                            slug={event.slug.current}
                         />
                    </Grid>
                ))}
            </Grid>

            {/* Our Sponser */}
            <Grid item xs={12} sx={{ marginY: "20px" }} >
                <Typography variant="h4" align="center"
                    sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', paddingX: '10px' }}
                >
                    Our <span style={{ color: theme.secondary }}>Sponsors</span>
                </Typography>
            </Grid>
            <Grid container spacing={2} sx={{ paddingX: '10px' }}>
                <Grid item xs={6} sm={4} md={3}>
                    <Card>
                        <CardMedia
                            sx={{
                                height: 0,
                                paddingTop: '56.25%', // 16:9
                            }}
                            image="https://via.placeholder.com/300x200"
                            title="Sponsor 1"
                        />
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Card>
                        <CardMedia
                            sx={{
                                height: 0,
                                paddingTop: '56.25%', // 16:9
                            }}
                            image="https://via.placeholder.com/300x200"
                            title="Sponsor 2"
                        />
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Card>
                        <CardMedia
                            sx={{
                                height: 0,
                                paddingTop: '56.25%', // 16:9
                            }}
                            image="https://via.placeholder.com/300x200"
                            title="Sponsor 3"
                        />
                    </Card>
                </Grid>
                <Grid item xs={6} sm={4} md={3}>
                    <Card>
                        <CardMedia
                            sx={{
                                height: 0,
                                paddingTop: '56.25%', // 16:9
                            }}
                            image="https://via.placeholder.com/300x200"
                            title="Sponsor 4"
                        />
                    </Card>
                </Grid>
            </Grid>








        </Box>






    );
};

export default HomePage;
