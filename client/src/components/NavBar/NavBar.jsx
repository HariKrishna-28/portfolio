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
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import AdbIcon from '@mui/icons-material/Adb';

const sections = ['Home', 'About', 'Contributions', 'Projects', 'Social'];
// const social = [
//     {
//         name: 'Github',
//         site: 'https://github.com/HariKrishna-28'

//     },
//     {
//         name: 'Hackerrank',
//         site: 'https://www.hackerrank.com/Harikrishna28'
//     },
//     {
//         name: 'Linkedin',
//         site: 'https://www.linkedin.com/in/harikrishna-c/'
//     },
//     {
//         site: 'Instagram',
//         site: 'https://www.instagram.com/___h28__'
//     }
// ]
// const social = ['Github', 'Hackerrank', 'Instagram', 'Linkedin'];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    // const handleOpenUserMenu = (event) => {
    //     setAnchorElUser(event.currentTarget);
    // };

    const handleCloseNavMenu = (section) => {
        setAnchorElNav(null);
        document.getElementById(section).scrollIntoView({ behavior: "smooth" })
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    return (
        <AppBar position="sticky" sx={{
            // background: "#1A1A1A",
            background: "#0C1116",
            // marginBottom: "100px"
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* small disp */}
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        // onClick}
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'Proxima Nova, system-ui, sans-serif',
                            fontWeight: 700,
                            // letterSpacing: '.5rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Harikrishna
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                            onClick={() => handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {sections.map((page, index) => (
                                <MenuItem key={index} onClick={() => handleCloseNavMenu(page)}>
                                    <a href={`#${page}`}>
                                        <div>
                                            <Typography textAlign="center">{page}</Typography>
                                        </div>
                                    </a>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    {/* { } */}

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            // letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Harikrishna
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <div className='flex w-full items-center justify-end gap-3'>
                            {sections.map((page) => (
                                <div>
                                    <Button
                                        key={page}
                                        onClick={() => handleCloseNavMenu(page)}

                                        sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Proxima Nova, system-ui, sans-serif', }}
                                    >
                                        {page}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </Box>

                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open social">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {social.map((setting, index) => (
                                <MenuItem key={index} onClick={handleCloseUserMenu}>
                                    <a href={setting.site} target="_blank" rel="noopener noreferrer">
                                        <Typography textAlign="center" sx={{ fontFamily: 'Proxima Nova, system-ui, sans-serif', }}>{setting.name}</Typography>
                                    </a>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar
