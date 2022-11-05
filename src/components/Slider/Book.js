import  Box  from "@mui/material/Box"
import  Paper  from "@mui/material/Paper"
import  Typography from "@mui/material/Typography"
import  Chip  from "@mui/material/Chip"
import  Divider  from "@mui/material/Divider"
import { CardImg } from "utils/Ui"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"


const Book = ({title,id,author:{name},category,coverPicUrl}) => {
  return (
    <Link to={`/books/${id}`} style={{textDecoration:'none',margin:'1em 0'}}>
      <Paper elevation={3} component={motion.div} whileHover={{scale:1.05,backgroundColor:'#e9eaec'}} sx={{p:'1em 2em',backgroundColor:'lightBg.main'}}>
        <Box component={motion.div}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.5}}
         sx={{ textAlign: 'center',py:'2em',backgroundColor:'whiteColor.main',overflow:'hidden'}}>
          <CardImg src={coverPicUrl} alt={title} loading="lazy" component={motion.img} />
        </Box>
        <Typography noWrap variant="h5" color='secondary' className="secondary-title" component='h3' my={3}>
          {title}
        </Typography>
        <Divider textAlign="right">
          <Typography variant="body1">
            {name}
          </Typography>
        </Divider>
        <Chip label={category} color="primary"/>
      </Paper>
     </Link>
  )
}

export default Book