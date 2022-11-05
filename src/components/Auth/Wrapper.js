import { motion } from "framer-motion";
import styled from "@mui/material/styles/styled";
import Paper from "@mui/material/Paper";
import bg from "assets/svg-bg.svg"
import Box from '@mui/material/Box'


const WrapperBox = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${bg})`,
    height: 'calc(100vh - 4rem)',
    minHeight: 'calc(100vh - 4rem) !important',
    width: '100vw',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));
const Wrapper = (props) => {
    return (
        <WrapperBox>
            <Paper component={motion.div} 
            initial={{
                opacity:0,
                scale:0.7

            }}
            animate={{
                opacity:1,
                scale:1,
                transition:{
                    delay:1,
                    duration:0.5,
                    type:'tween'
                }
            }}
             elevation={24} sx={{ p: '1em 2em' }} >
               
                {props.children}
            </Paper>
        </WrapperBox>
    )
}

export default Wrapper