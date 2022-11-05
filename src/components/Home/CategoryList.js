import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AnimateInView from "components/Ui/AnimateInView";
import SearchIcon from '@mui/icons-material/Search';
import { cats } from "utils/mock";
import  Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { containerVariants } from "utils/Ui";

const colors=['primary','secondary','pinkShade','success','warning','danger']

function randomColor(){

    return colors[Math.floor(Math.random()*colors.length)]
}

const textVariants = {
    hidden: {
        y: 100, opacity: 0
    },
    show: {
        y: 0, opacity: 1,
    }
}

const searchIconVariants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        scale: [0, 1, 1.5, 0.5, 1],
        y: [10, 0, -10, 0]

    }
}



const listItemVariants = {
    hidden: {
        opacity: 0,
        scale: 0.7
    },
    show: {
        opacity: 1,
        scale: 1
    }
}
const CategoryList = () => {
    return (
        <Box sx={{ textAlign: 'center', p: '5em 2em' }}>
            <AnimateInView
                variants={textVariants}
            >
                <Stack direction='row' alignItems='center' justifyContent='center'>
                    <Typography
                        variant="h3" className="main-title" color='primary'  >
                        Looking for Genere?
                    </Typography>
                    
                    <AnimateInView
                        variants={searchIconVariants}
                    >
                        <SearchIcon fontSize="large" sx={{ fontSize: '3.5rem', marginX: 2 }} color="primary" />
                    </AnimateInView>
                </Stack>
                <Typography my={2}>
                        Choose from thousands of audio books
                </Typography>
            </AnimateInView>
            <AnimateInView
                variants={containerVariants}
            >
            </AnimateInView>
            <Grid container spacing={3} my={3} px={3}>
            {cats.map(({ label, Icon }) => (
                <Grid item xs={12} sm={6} md={3} key={label}>
                    <AnimateInView  variants={listItemVariants}
                    addons={{
                        'whileHover':{
                            scale:1.07,
                            transition:{
                                duration:0.3
                            }
                        },
                    }}
                    >
                        <Link to={`/books?category=${label}`} style={{textDecoration:'none'}}>
                        <Paper elevation={10} sx={{ backgroundColor: 'lightBg', p: '1em .5em' }}>
                            <Icon fontSize="large" color={randomColor()} />
                            <Typography variant="h5">
                                {label}
                            </Typography>
                        </Paper>
                        </Link>
                    </AnimateInView>
                </Grid>
            ))}
            </Grid>

        </Box>
    )
}

export default CategoryList