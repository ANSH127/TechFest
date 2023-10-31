import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { theme } from '../theme/index'
import { client } from '../api/SanityClient'

import { useParams } from 'react-router-dom'
import NotFound from '../components/404'
import supabase from '../api/SupabaseClient'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function RegisterPage() {
    const { slug } = useParams();

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [regno, setRegno] = React.useState('');
    const [isValid, setIsValid] = React.useState(true);
    const [handleSubmiting, setHandleSubmiting] = React.useState(false);


    const handleSubmit = async() => {
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
        setHandleSubmiting(true);


        // check if regno and event name already exists
        const { data } = await supabase.from('registrations').select('*').eq('reg_no', regno).eq('event_name', slug);
        if (data.length !== 0) {
            toast.error('You have already registered for this event');
            setName('');
            setEmail('');
            setPhone('');
            setRegno('');
            return;
        }


        const {error } = await supabase.from('registrations').insert([
            { name, email, phone, reg_no:regno, event_name: slug },
        ]);
        if (error) {
            toast.error('Something went wrong');
            return;
        }
        setName('');
        setEmail('');
        setPhone('');
        setRegno('');
        toast.success('Your registration has been sent');
        setHandleSubmiting(false);


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
            <NotFound />
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


                    <button onClick={handleSubmit} className="orange-button"
                        disabled={handleSubmiting} style={{
                            cursor: handleSubmiting ? 'not-allowed' : 'pointer',
                            backgroundColor: handleSubmiting ? '#ffffff' : theme.secondary,
                            color: handleSubmiting ? theme.secondary : '#ffffff'
                            
                        }}
                    >Submit</button>
                </div>


            </Box>
            <ToastContainer />

        {
            handleSubmiting && (
                <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            )
        }

        </Box>




    )
}
