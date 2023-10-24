import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { theme } from '../theme/index'
import { client } from '../api/SanityClient'

import { useParams } from 'react-router-dom'
export default function RegisterPage() {
    const { slug } = useParams();

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [regno, setRegno] = React.useState('');
    const [isValid, setIsValid] = React.useState(true);

    const handleSubmit = () => {
        if (name === '' || email === '' || phone === '' || regno === '') {
            alert('Please fill all the fields');
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email');
            return;
        }
        if (phone.length !== 10) {
            alert('Please enter a valid phone number');
            return;
        }
        if(regno.length !== 8){
            alert('Please enter a valid registration number');
            return;
        }
        alert('Your message has been sent');

    }

    useEffect(() => {
        const findEvent = async () => {
            const event = await client.fetch(`*[_type == "Events" && slug.current == "${slug}"]`);
            if (event.length === 0) {
                setIsValid(false);
            }
        }
        findEvent();

    }, [slug])

    if (!isValid) {
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
                    sx={{
                        fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', paddingX: '10px', color: theme.color
                    }}
                >
                    Event not found
                </Typography>
            </Box>
        )
    }

    return (
        <Box sx={{

            margin: 'auto',
            width: {
                xs: '90%',
                md: '70%',
            },
            color: '#ffffff',
            marginTop: '3rem'
        }}>
            <Typography variant="h4" align="center"
                sx={{
                    fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', paddingX: '10px', color: theme.color
                }}
            >
                Register <span style={{ color: theme.secondary }}>Form</span>
            </Typography>
            <Box
                sx={{


                    padding: "1rem",
                    width: {
                        xs: "90%",
                        md: "60%"
                    },
                    margin: "auto",
                    marginTop: "2rem",
                    color: '#ffffff',

                }} >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%'
                }}
                >
                    <input type='text' id="event" name="event" placeholder='Event name..'
                        value={slug} disabled />

                    <input type="text" id="name" name="name" placeholder="Your Name.."
                        value={name} onChange={(e) => setName(e.target.value)}
                    />

                    <input id="regno" name="regno" type='text' placeholder='Your RegNo..'
                        value={regno} onChange={(e) => setRegno(e.target.value)}
                    />
                    <input type="text" id="email" name="email" placeholder="Your Email.."
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="text" id="phone" name="phone" placeholder="Your Phone.."
                        value={phone} onChange={(e) => setPhone(e.target.value)}
                    />
                </div>





                <div style={{ marginTop: '10px', textAlign: 'center' }}>


                    <button onClick={handleSubmit} className="orange-button">Submit</button>
                </div>


            </Box>


        </Box>




    )
}
