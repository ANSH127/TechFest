
import React from 'react';
import { Grid, Typography } from '@mui/material';
import notfoundimage from '../img/404.jpg'
const NotFound = () => {

    return (
        <Grid container justify="center" alignItems="center" style={{
            flexGrow: 1,
            height: '100vh',
        }}>
            <Grid item xs={12} sm={6}>

                <img src={notfoundimage} alt="hero"
                    style={{ width: '100%', height: '100%' }}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography variant="h1" align="center">
                    404
                </Typography>
                <Typography variant="h4" align="center">
                    Oops! The page you are looking for does not exist.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default NotFound;
