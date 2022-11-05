import { useState } from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ListItemText from "@mui/material/ListItemText";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PasswordIcon from '@mui/icons-material/Password';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "store/reducers/authReducer";
const Avatar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const user = useSelector(selectUser)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    let routes = (
        [
            <MenuItem key='sign-in' component={Link} to='/sign-in'>
                <ListItemIcon>
                    <PasswordIcon/>
                </ListItemIcon>
                <ListItemText >
                    Sign In
                </ListItemText>
            </MenuItem>,
            <MenuItem key='sign-up' component={Link} to='/sign-up'>
                <ListItemIcon>
                    <PersonAddIcon/>
                </ListItemIcon>
                <ListItemText >
                    Sign Up
                </ListItemText>
            </MenuItem>
        ]
    )
    if (user) {
        routes = [
            <MenuItem  key='profile'>
                <ListItemIcon>
                    <PersonOutlineIcon />
                </ListItemIcon>
                <ListItemText >
                    {user.name}
                </ListItemText>
            </MenuItem>,
            <MenuItem key='create-book' component={Link} to='/createBook'>
                <ListItemIcon>
                    <PostAddIcon />
                </ListItemIcon>
                <ListItemText >
                    Add Book
                </ListItemText>
            </MenuItem>,
            <MenuItem key='logout'  component={Link} to='/logout' >
                <Divider/>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        ]
    }
    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account Setting" arrow>
                    <IconButton
                        onClick={handleClick}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        color='inherit'
                    >
                        <PersonOutlineIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {routes}

            </Menu>
        </>
    )
}

export default Avatar