import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Button, Divider, Box } from '@mui/material';
import { theme } from '../theme';

const HomePage = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* //make a grid  in one side there is a image and in other side there is a text */}
            <Grid container spacing={0} sx={{ marginTop: '2rem' }}>
                <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src='./images/1.gif' alt="hero" width={600} height={400} />

                </Grid>
                <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h4" component="h2" gutterBottom sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem',paddingX:'10px' }}>
                            DISCOVER  <span style={{color:theme.secondary}}>TECHFEST</span> 2023 
                          
                        </Typography>
                        <Typography
                            variant="h6"
                            component="h2"
                            gutterBottom
                            sx={{ display:'inline-block',fontFamily: 'monospace', fontWeight: 400, letterSpacing: '.2rem' 
                            ,backgroundColor:theme.secondary,padding:'0.3rem',borderRadius:'0.5rem',color:theme.color
                        }}

                        >
                            Explore | Create | Showcase

                        </Typography>
                    </Box>

                </Grid>


            </Grid>
            {/* upcoming events */}
            <Grid item xs={12} sx={{marginY:"20px"}} >
                <Typography variant="h3" align="center"
                sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem',paddingX:'10px' }}
                >
                    Upcoming <span style={{color:theme.secondary}}>Events</span>
                </Typography>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            sx={{
                                height: 0,
                                paddingTop: '56.25%', // 16:9
                            }}
                            image="https://via.placeholder.com/600x400"
                            title="Event 1"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event 1
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </CardContent>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            sx={{
                                height: 0,
                                paddingTop: '56.25%', // 16:9
                            }}
                            image="https://via.placeholder.com/600x400"
                            title="Event 2"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event 2
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </CardContent>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            sx={{
                                height: 0,
                                paddingTop: '56.25%', // 16:9
                            }}
                            image="https://via.placeholder.com/600x400"
                            title="Event 3"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Event 3
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                        </CardContent>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </Card>
                </Grid>
            </Grid>

            {/* Our Sponser */}
            <Grid item xs={12} sx={{marginY:"20px"}} >
                <Typography variant="h3" align="center"
                sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem',paddingX:'10px' }}
                >
                    Our <span style={{color:theme.secondary}}>Sponsors</span>
                </Typography>
            </Grid>
            <Grid container spacing={3}>
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
