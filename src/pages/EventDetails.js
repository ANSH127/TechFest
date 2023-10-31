import React, { useEffect } from 'react'
import { Box, Divider } from '@mui/material'
import { Typography } from '@mui/material'
import { theme } from '../theme'
import { useParams } from 'react-router-dom'
import { client, builder } from '../api/SanityClient'
import { format } from 'date-fns'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom'
import NotFound from '../components/404'




export default function EventDetails() {

    const [event, setEvent] = React.useState(null);
    const [isValid, setIsValid] = React.useState(true);

    const { slug } = useParams();

    useEffect(() => {
        const fetchEvent = async () => {
            const event = await client.fetch(`*[_type == "Events" && slug.current == "${slug}"]`);
            if (event.length === 0) {
                setIsValid(false);
                return;
            }
            setEvent(event[0]);
        }
        fetchEvent();
    }, [slug])

    if (!event && !isValid) return (
        <NotFound />
    )


    if (!event && isValid) return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )

    return (
        <Box
            sx={{
                margin: 'auto',
                width: {
                    xs: '90%',
                    md: '80%',
                },
                color: '#ffffff',
                marginTop: '3rem'
            }}>
            {/* // Event details page with phto full width and description below it */}

            <Box
                sx={{
                    padding: '10px',

                }}
            >
                <img
                    src={
                        builder.image(event.Image).url()
                    }
                    alt="Event"
                    width="100%"


                />
            </Box>
            <Box
                sx={{
                    textAlign: 'left'
                }}
            >
                <Divider />
                <Typography variant="h4"
                    sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', paddingX: '10px', color: theme.color }}
                >
                    {event.Title}
                </Typography>
                <Typography variant="p"
                    sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', paddingX: '10px', color: theme.color }}
                >

                    <span style={{ color: theme.secondary }}>Date:</span>
                    {/* {format(new Date(event.Date), 'dd MMMM yyyy')} */}
                    Will be announced soon

                </Typography>
                <br />
                <Typography variant="p"
                    sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', paddingX: '10px', color: theme.color }}
                >
                    <span style={{ color: theme.secondary }}>Time:</span> 
                    {/* {event.time} */}
                    Will be announced soon
                </Typography>
                <br />
                <Typography variant="p"
                    sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', paddingX: '10px', color: theme.color }}
                >
                    <span style={{ color: theme.secondary }}>Venue:</span>
                     {/* {event.Venue} */}
                        Will be announced soon
                </Typography>
                <br />
                {/* register button */}
                <Link to={`/register/${event.slug.current}`} style={{ textDecoration: 'none' }}>
                    <button style={{ margin: '10px' }} className="orange-button">Register</button>
                </Link>


                <Divider />
                <Typography variant="h6"
                    sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', paddingX: '10px', color: theme.color, marginTop: '10px' }}
                >
                    {/* {event.Description} */}
                </Typography>

            </Box>












        </Box>
    )
}
