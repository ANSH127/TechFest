import React from 'react'
import { theme } from '../theme'
import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

export default function EventCard(props) {
    return (
        <Card sx={{
            minWidth: 300,
            maxWidth: 345
        }}>
            <CardMedia
                component="img"
                height="150"
                image={props.img}
                alt={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"
                    sx={{ color: theme.color, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem' }}
                >
                    {props.title}
                </Typography>
                {/* <Typography variant="body1" color="text.secondary"
                    sx={{
                        color: 'grey',
                        textAlign: 'justify',





                    }}
                >
                    {props.desc}
                </Typography> */}
                <Typography variant="h6" color="text.secondary"
                    sx={{
                        color: 'black',
                        fontWeight: 500,
                        fontfamily: 'monospace',
                        // letterSpacing: '.1rem',
                        textAlign: 'justify',
                        fontSize: 'medium',
                    }}
                >
                    <span style={{ color: theme.secondary }}>Date:</span>
                    {/* {format(new Date(props.date), 'dd MMMM yyyy')} */}
                    Will be announced soon


                    <br />
                    <span style={{ color: theme.secondary }}>Time:</span> 
                    {/* {props.time} */}
                    Will be announced soon
                </Typography>


            </CardContent>
            <CardActions
                sx={{
                    justifyContent: 'center',


                }}
            >
                <Link to={`/register/${props.slug}`} style={{ textDecoration: 'none' }}>
                <button className="orange-button">Register</button>
                </Link>
                <Link to={`/event/${props.slug}`} style={{ textDecoration: 'none',paddingLeft:'10px' }}>
                    <button className="orange-button"  >
                        Details
                    </button>
                </Link>
            </CardActions>
        </Card>
    )
}
