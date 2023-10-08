import React from 'react'
import { theme } from '../theme'
import { Box, Typography, Grid } from '@mui/material'
import { Card, CardMedia, CardContent, CardActions} from '@mui/material';

export default function Event() {
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
      <Typography variant="h3" align="center"
        sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', paddingX: '10px', color: theme.color }}
      >
        Upcoming <span style={{ color: theme.secondary }}>Events</span>
      </Typography>
      <Grid container spacing={2}
        sx={{
          padding: '10px',
          marginTop: '1rem',
          marginBottom: '1rem',
          display: 'flex',
          flexwrap: 'wrap',
          alignItems: 'center',


        }}>

        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ 
            minWidth: 300,
            maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="150"
              image="./images/e1.jpeg"
              alt="Upcoming Event"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"
                sx={{ color: theme.color ,fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem' }}
              >
                Web Development
              </Typography>
              <Typography variant="body1" color="text.secondary"
              sx={{
                color: 'grey',
                textAlign: 'justify',
                


  

              }}
              >
                This is a WorkShop  on Web Development using ReactJS and NodeJS and MongoDB as backend...
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
              <span style={{ color: theme.secondary }}>Date:</span> October 10, 2021 <br/>
              <span style={{ color: theme.secondary }}>Time:</span> 10:00 AM-12:00 PM 
              </Typography>


            </CardContent>
            <CardActions 
            sx={{
              justifyContent: 'center',


            }}
            >
              <button class="orange-button">Register</button>
              <button class="orange-button">Details</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ 
            minWidth: 300,
            maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="150"
              image="./images/e1.jpeg"
              alt="Upcoming Event"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"
                sx={{ color: theme.color ,fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem' }}
              >
                Web Development
              </Typography>
              <Typography variant="body1" color="text.secondary"
              sx={{
                color: 'grey',
                textAlign: 'justify',
                


  

              }}
              >
                This is a WorkShop  on Web Development using ReactJS and NodeJS and MongoDB as backend...
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
              <span style={{ color: theme.secondary }}>Date:</span> October 10, 2021 <br/>
              <span style={{ color: theme.secondary }}>Time:</span> 10:00 AM-12:00 PM 
              </Typography>


            </CardContent>
            <CardActions 
            sx={{
              justifyContent: 'center',


            }}
            >
              <button class="orange-button">Register</button>
              <button class="orange-button">Details</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ 
            minWidth: 300,
            maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="150"
              image="./images/e1.jpeg"
              alt="Upcoming Event"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"
                sx={{ color: theme.color ,fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem' }}
              >
                Web Development
              </Typography>
              <Typography variant="body1" color="text.secondary"
              sx={{
                color: 'grey',
                textAlign: 'justify',
                


  

              }}
              >
                This is a WorkShop  on Web Development using ReactJS and NodeJS and MongoDB as backend...
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
              <span style={{ color: theme.secondary }}>Date:</span> October 10, 2021 <br/>
              <span style={{ color: theme.secondary }}>Time:</span> 10:00 AM-12:00 PM 
              </Typography>


            </CardContent>
            <CardActions 
            sx={{
              justifyContent: 'center',


            }}
            >
              <button class="orange-button">Register</button>
              <button class="orange-button">Details</button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ 
            minWidth: 300,
            maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="150"
              image="./images/e1.jpeg"
              alt="Upcoming Event"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"
                sx={{ color: theme.color ,fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem' }}
              >
                Web Development
              </Typography>
              <Typography variant="body1" color="text.secondary"
              sx={{
                color: 'grey',
                textAlign: 'justify',
                


  

              }}
              >
                This is a WorkShop  on Web Development using ReactJS and NodeJS and MongoDB as backend...
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
              <span style={{ color: theme.secondary }}>Date:</span> October 10, 2021 <br/>
              <span style={{ color: theme.secondary }}>Time:</span> 10:00 AM-12:00 PM 
              </Typography>


            </CardContent>
            <CardActions 
            sx={{
              justifyContent: 'center',


            }}
            >
              <button class="orange-button">Register</button>
              <button class="orange-button">Details</button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>
    </Box>
  )
}
