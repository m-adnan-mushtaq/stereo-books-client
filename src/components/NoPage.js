import  Typography  from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
const NoPage = () => {
  return (
    <Stack spacing={3} justifyContent='center' alignItems='center' sx={{my:10,p:5}}>
            <ReportProblemIcon 
            fontSize="large"
            color="pinkShade"
            />
            <Typography variant="h3" color='secondary'>
                    404 , No Page Found
            </Typography>
    </Stack>
  )
}

export default NoPage