import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { theme } from '../theme/index';



const pages = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Event', to: '/event' },
    { name: 'Sponser', to: '/sponser' },
    { name: 'Contact', to: '/contact' },
];
export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (

        <AppBar position="sticky"
            sx={{
                backgroundColor: theme.bgcolor, 
                // color: theme.color, 
                borderBottom: '1px solid #000',
                padding: '0 1rem',
                paddingY: '0.4rem',
                background: 'transparent',
                backdropFilter: 'blur(10px)',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img src='./images/logo.webp' alt="logo" width={200} height={60} />
                        </Link>
                    </Typography>


                    <Typography
                        variant="h5"
                        noWrap
                        component="a"

                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img src='./images/logo.webp' alt="logo" width={160} height={40} />
                        </Link>
                    </Typography>


                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', position: 'absolute', right: 0 } }}>
                        {pages.map((page) => (
                            <Link key={page.name} to={page.to} style={{
                                textDecoration: 'none'

                            }}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block', color: theme.color, fontWeight: 700 }}
                                >
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link key={page.name} to={page.to} style={{ textDecoration: 'none', color: theme.color }}>

                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography color={'black'} textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}
