import React from 'react'
import { theme } from '../theme'
import { Box, Typography } from '@mui/material'

export default function About() {
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
        About <span style={{ color: theme.secondary }}>Us</span>
      </Typography>
      <Box
        sx={{
          margin: 'auto',
          width:'100%',
          color: '#ffffff',
          marginTop: '3rem',
          backgroundColor:'#f7e2d1',
          borderRadius:'5px',
          padding:'10px',
        }}
      >
        <Typography variant="h6" align="center"
          sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', paddingX: '10px', color: theme.color }}
        >
          Techfest is an annual technical festival of Lovely Professional University. Started in 2007 with the aim of providing a platform for the Indian student community to develop and showcase their technical prowess, we have now grown into Asia's Largest Science and Technology Festival: a grand three-day event on the campus of Lovely Professional University attracting people from all walks of life including students, academics, professionals and the general public.
        </Typography>

      </Box>
    </Box>
  )
}
