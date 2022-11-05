import  Typography  from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import "./upload.css"
const UploadSpinner = () => {
  return (
    <Stack spacing={2} alignItems='center'>
        <section><span className="loader-102"> </span></section>
        <Typography>
            Don't close window , while we setting up things...
        </Typography>
    </Stack>
  )
}

export default UploadSpinner