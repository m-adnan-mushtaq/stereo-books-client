import {useEffect, useState} from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from "assets/stereo-books-logo.svg"
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from "components/Layout/Avatar";
import Paper from '@mui/material/Paper';
import Sidebar from 'components/Ui/Sidebar';
import NavLinks from 'components/Layout/NavLinks';
import { BlockImg } from 'utils/Ui';
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const [openSideBar, setOpenSideBar] = useState(false)
  const openDrawer = () => setOpenSideBar(true)
  const closeDrawer = () => setOpenSideBar(false)
  const {pathname}=useLocation()

  
  //close sidebar after changing page
  useEffect(()=>{
    setOpenSideBar(false)
  },[pathname])
  return (
    <Box sx={{ mb: '4rem' }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: 'tween',
        duration: 1
      }}
    >
      <AppBar position="fixed" color='whiteColor'>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button sx={{ width: '150px' }} component={Link} to='/'>
              <BlockImg src={Logo} title='Stereo Books' alt="stereo books" />
            </Button>
          </Box>
          <Avatar />
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={openDrawer}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
          <Sidebar
            open={openSideBar}
            anchor='right'
            openDrawer={openDrawer}
            closeDrawer={closeDrawer}
            bgColor='primary.main'
          >
            <Paper sx={{ width: 320, maxWidth: '100%', backgroundColor: 'primary.main', color: '#fff',boxShadow:'none' }} >
              <NavLinks />
            </Paper>
          </Sidebar>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar