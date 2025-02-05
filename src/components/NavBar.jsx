import React, { useState } from 'react';
import './NavBar.css';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const NavBar = () => {
    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div className="navbar">
            <div className='laptop-nav'>
                <div className="logo">Sam's Cafe</div>
                    <nav className="nav-links">
                        <a href="#">Home</a>
                        <a href="#">Display</a>
                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </nav>
                    <button className="special-button">Book a Table</button>
                </div>
            <div>
            <div className='mob-nav'>
                <React.Fragment key="left">
                <Button onClick={toggleDrawer("left", true)}>Open Menu</Button>
                <SwipeableDrawer
                    anchor="left"
                    open={state.left}
                    onClose={toggleDrawer("left", false)}
                    onOpen={toggleDrawer("left", true)}
                >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={toggleDrawer("left", false)}
                        onKeyDown={toggleDrawer("left", false)}
                    >
                        
                    </Box>
                </SwipeableDrawer>
            </React.Fragment>
            </div>
            
        </div>
        </div>
    );
};

export default NavBar;
