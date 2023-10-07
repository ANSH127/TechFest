import React from 'react'
import { Grid, Typography,Divider } from '@mui/material'
import { theme } from '../theme'

export default function Footer() {
  return (
    <>
    <Divider sx={{ marginY: "20px" }} />
    <Grid item xs={12} sx={{
        marginY: "20px"
    }} >
        <Typography variant="h6" align="center"
            sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', paddingX: '10px' }}
        >
            CopyRight &copy; 2023 <span style={{ color: theme.secondary }}>TECHFEST</span>
        </Typography>
    </Grid>
    </>
  )
}
