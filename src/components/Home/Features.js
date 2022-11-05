import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AnimateInView from "components/Ui/AnimateInView";
import { containerVariants } from "utils/Ui";
import FeatureList from "./FeatureList";



const features1 = [{
    title: 'Convenience',
    desc: 'Listen anytime, anywhere. Stream audio directly in your browser or download and play while disconnected.'
},
{
    title: 'Mobile',
    desc: "Listen on your mobile, tablet, or desktop. Audio file formats are supported and played on all devices.",
},
{
    title: 'Education',
    desc: 'Learn by listening and become a proficient reader. Access native speakers to help you learn a language.'
}, {
    title: 'Adaptable',
    desc: "Change the playback speed, and adjust the volume to create the perfect listening experience."
},
]
const features2 = [
    {
        title: "Portable",
        desc: "Carry your whole library with you wherever you go and access it on your mobile, tablet, or e-reading device. Ideal for travelling.",
    }, {
        title: 'E-Studying',
        desc: "Widen your vocabulary and improve your grammar. Use graded ebooks or read and listen to the audio book at the same time to test your comprehension."
    },
    {
        title: 'Environment',
        desc: "Digital books are green. No paper, no transportation costs, no waste."
    },
    {
        title: 'Classics are free!',
        desc: "Thousands of classic books are available free in the public domain. Digitalbook provides a platform to easily access these books along with free podcasts."

    }
]



const Features = () => {
    return (
        <Box sx={{bgcolor:'whiteColor.main',py:'4em',px:10}}>
            <Typography variant="h3" align="center" color='secondary' my={4}>
                Great reasons to use Stereo Books
            </Typography>
            <AnimateInView variants={containerVariants}>
            <Stack direction={{sm:'column',md:'row'}} spacing={4} >
               <FeatureList
               features={features1}
               />
               <FeatureList
               features={features2}
               />
            </Stack>
            </AnimateInView>
            
        </Box>
    )
}

export default Features