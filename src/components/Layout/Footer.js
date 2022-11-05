import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import logo from "assets/stereo-books-logo.svg"
import NavLink from "components/AuxComp/NavLink";
import { BlockImg } from "utils/Ui"
import AnimateInView from "components/Ui/AnimateInView"

const Footer = () => {
    return (
        <AnimateInView variants={{
            hidden:{
                opacity:0,
            },
            show:{
                opacity:1,
            }
        }}>
          <Box component='footer'>
            <Stack sx={{ bgcolor: 'primary.main', color: '#ffff' }} direction={{ sm: 'column', md: 'row' }} p={3} justifyContent='space-between'>
                <Typography variant="h5">
                    Get connected with us on social networks:
                </Typography>
                <Stack direction='row' spacing={2}>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <GoogleIcon />
                </Stack>
            </Stack>
            <Box py={10}>
                <Stack direction={{ sm: 'column', md: 'row' }} alignItems='center' justifyContent='space-around'>
                    <Box>
                        <Box>
                        <BlockImg src={logo}/>
                        </Box>
                        <Typography variants='body2' className="secondary-title" align='center'>
                        Search for audiobooks and ebooks
                        </Typography>
                    </Box>
                    <Stack >
                        <Typography variant="h5" color='secondary'>
                            Links
                        </Typography>
                        <Divider />
                        <NavLink path="/" addons={{variant:'h6'}} >
                            Home
                        </NavLink>
                        <NavLink path="/books" addons={{variant:'h6'}} >
                            Books
                        </NavLink>
                        <NavLink path="/search" addons={{variant:'h6'}} >
                            Search
                        </NavLink>
                        <NavLink path="/contact" addons={{variant:'h6'}} >
                            Contact Us
                        </NavLink>
                        <NavLink path="/about" addons={{variant:'h6'}} >
                            About Us
                        </NavLink>
                    </Stack>

                </Stack>

            </Box>
        </Box>
        </AnimateInView>
      
    )
}

export default Footer