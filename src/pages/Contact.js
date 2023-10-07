import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { theme } from '../theme/index'

export default function ContactPage() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = () => {
        if (name === '' || email === '' || phone === '' || message === '') {
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
        alert('Your message has been sent');

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
            <Typography variant="h3" align="center"
                sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', paddingX: '10px',color:theme.color }}
            >
                Contact <span style={{ color: theme.secondary }}>Me</span>
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

                    <input type="text" id="name" name="name" placeholder="Your name.."
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                    <input type="text" id="email" name="email" placeholder="Your email.."
                        value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="text" id="phone" name="phone" placeholder="Your phone.."
                        value={phone} onChange={(e) => setPhone(e.target.value)}
                    />

                    <textarea id="message" name="message" placeholder="Write something.." style={{ height: '80px' }}
                        value={message} onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>





                <div style={{ marginTop: '10px', textAlign: 'center' }}>

                    <Button onClick={handleSubmit} color='secondary' variant="contained" >Submit</Button>
                </div>


            </Box>


        </Box>




    )
}
