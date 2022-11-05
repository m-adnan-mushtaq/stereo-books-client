import Box from "@mui/material/Box"
import './spinner.css'
const Spinner = () => {
    return (
        <Box  className="loader-wrapper" sx={{my:10,mx:'auto',textAlign:'center'}}>
             <section><span className="loader-60"> </span></section>
        </Box>
    )
}

export default Spinner