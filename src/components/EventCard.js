import React from 'react'
import { theme } from '../theme'
import { Card, CardMedia, CardContent, CardActions,Typography } from '@mui/material';

export default function EventCard(props) {
    return (
        <Card sx={{
            minWidth: 300,
            maxWidth: 345
        }}>
            <CardMedia
                component="img"
                height="150"
                image="./images/e1.jpeg"
                alt="Upcoming Event"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"
                    sx={{ color: theme.color, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem' }}
                >
                    {props.title}
                </Typography>
                <Typography variant="body1" color="text.secondary"
                    sx={{
                        color: 'grey',
                        textAlign: 'justify',





                    }}
                >
                    {props.desc}
                </Typography>
                <Typography variant="h6" color="text.secondary"
                    sx={{
                        color: 'black',
                        fontWeight: 500,
                        fontfamily: 'monospace',
                        letterSpacing: '.1rem',
                        textAlign: 'justify',
                    }}
                >
                    <span style={{ color: theme.secondary }}>Date:</span> {props.date} <br />
                    <span style={{ color: theme.secondary }}>Time:</span> {props.time}
                </Typography>


            </CardContent>
            <CardActions
                sx={{
                    justifyContent: 'center',


                }}
            >
                <button className="orange-button">Register</button>
                <button className="orange-button">Details</button>
            </CardActions>
        </Card>
    )
}
