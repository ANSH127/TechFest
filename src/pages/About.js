import React from 'react'
import { theme } from '../theme'
import { Box, Typography } from '@mui/material'

export default function About() {
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
        sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.1rem', paddingX: '10px', color: theme.color }}
      >
        About <span style={{ color: theme.secondary }}>Us</span>
      </Typography>
    </Box>
  )
}
