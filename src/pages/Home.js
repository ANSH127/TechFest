import React from 'react';
import { Grid, Typography, Card, CardMedia, CardContent, Button, Divider } from '@mui/material';

const HomePage = () => {

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h4" align="center">
                    Welcome to TechFest!
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardMedia
                        sx={{
                            height: 0,
                            paddingTop: '56.25%', // 16:9
                        }}
                        image="https://via.placeholder.com/600x400"
                        title="TechFest"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            TechFest 2023
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                        </Typography>
                    </CardContent>
                    <Button size="small" color="primary">
                        Register Now
                    </Button>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" align="center">
                    Upcoming Events
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
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" align="center">
                    Sponsors
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
            <Grid item xs={12}>
                <Divider />
            </Grid>
            <Grid item xs={12}>
                <Typography 
                variant="h5" align="center"
                >
                    CopyRight &copy; 2023 TechFest
                </Typography>


            </Grid>








        </Grid>
    );
};

export default HomePage;
