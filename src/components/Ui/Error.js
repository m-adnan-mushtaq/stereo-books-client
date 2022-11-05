import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
const Error = ({error}) => {
    return (
        <Alert severity="error" sx={{my:10,width:'80vw',mx:'auto'}}>
            <AlertTitle>Error</AlertTitle>
            {error} <strong>Try again</strong>
        </Alert>
    )
}

export default Error