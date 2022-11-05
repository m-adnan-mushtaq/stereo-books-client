import  Avatar  from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import AnimateInView from "components/Ui/AnimateInView"
import AnimateTransition from "components/Ui/AnimateTransition"
const containerVariants={
    hidden:{
      opacity:0,
        x:'100vw'
    },
    show:{
      opacity:1,
      x:0
    },
    exit:{
      opacity:0,
     x:'-100vw'
    }
  }
const About = () => {
    return (
        <AnimateTransition variants={containerVariants}>

      
        <Box sx={{textAlign:'center'}} px={10} my={10}>
            <Typography mt={10} mb={3} className='main-title' variant="h1" align="center" color='primary'>
                About Us
            </Typography>
            <AnimateInView>
                <Typography my={3} variant="h2" color='secondary'>
                    What?
                </Typography>
                <Typography variant="h6">
                    We are a place to find free public domain audio books and eBooks.
                    <br />
                    Here books are directly uploaded to <strong>S3</strong> Bucket and distributed over own personal <strong>CDN </strong>
                     to provide 10x faster audio streaming to users
                    <br />
                </Typography>
            </AnimateInView>
            <AnimateInView>
                <Typography my={3} variant="h2" color='secondary'>
                    Why?
                </Typography>
                <Typography variant="h6">
                    Our goal is to help as many people as possible find and enjoy digital books.
                    <br />
                    We wanted to build an experience that was simple, easy-to-use and accessible no matter where you are in the world.
                    <br />
                    To provide a solution that works across thousands of device and platform combinations; on mobile, tablet or desktop.
                </Typography>
            </AnimateInView>
            <AnimateInView>
                <Typography my={3} variant="h2" color='secondary'>
                    Who?
                </Typography>
                <Avatar
                    alt="Adnan  Malik"
                    src="https://avatars.githubusercontent.com/u/76768844?v=4"
                    sx={{ width: 200, height: 200 ,mx:'auto'}}


                />
                <Typography my={3} variant="h5">
                    Adnan Malik | Creator
                </Typography>
            </AnimateInView>



        </Box>
        </AnimateTransition>
    )
}

export default About