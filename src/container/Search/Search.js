import { useRef } from 'react';
import  Typography  from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import SearchIcon from "@mui/icons-material/Search"
import Box from '@mui/material/Box';
import "./search.css"
import searchSvg from "assets/animated-search.svg"
import { BlockImg } from 'utils/Ui';
import { motion } from 'framer-motion';
const Search = () => {

  const navigate=useNavigate()
  const searchInput=useRef()
  const submitHandler=e=>{
    e.preventDefault()
    let value=searchInput.current.value
    if(!value) return;
     navigate(`/books?q=${value.trim()}`)
  }
  return (
    <Grid container
      spacing={0}
      sx={{ height: 'calc(100vh - 4rem )' }}
    >
      <Grid item md={6} sx={{ p: 2, pt: '6rem', textAlign: 'center' }}>
        <Typography  sx={{typography:{xs:'h3',md:'h2'}}}
        initial={{opacity:0,y:-200}}
        transition={{duration:1,delay:0.5,type:'spring',stiffness:200,damping:10}}
        animate={{opacity:1,y:0}}
        component={motion.h2} color='primary' my={2} className='main-title'>
          Search for
        </Typography>
        <Typography variant='h6' component={motion.h6}
        initial={{opacity:0}}
        transition={{duration:1,delay:0.7,type:'tween'}}
        animate={{opacity:1}}
         px={5} mb={1} className='secondary-title'>
          Listen to Audio Books distributed over Stereo Books CDN - CloudFlare
        </Typography>
        <Box my={2}>
          <Box className='search-box' component={motion.div}
          initial={{opacity:0,y:200}}
          transition={{duration:1.2,delay:1.3,type:'tween'}}
          animate={{opacity:1,y:0}}
           >
            <SearchIcon fontSize='large' />
            <form action="/books" method="get" onSubmit={submitHandler} >
              <input ref={searchInput} type="text" name="q"  placeholder='start typing...' />
            </form>
          </Box>
        </Box>
      </Grid>
      <Grid item md={6} sx={{p:0, display: { xs: 'none', md: 'block' } }} >
        <Box component={motion.div} initial={{scale:0.4,opacity:0}} animate={{scale:0.8,opacity:1}} transition={{duration:1,delay:0.5}}>
          <BlockImg src={searchSvg} alt='search svg' loading='lazy' />
        </Box>
        </Grid>
    </Grid>
  )
}

export default Search