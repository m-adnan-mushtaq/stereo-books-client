import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import UiModal from 'components/Ui/UiModal';
import CancelIcon from '@mui/icons-material/Cancel';
import "./media.css"
const PlayerModal = ({ open, onClose, title, signedUrl }) => {
    return (
        <UiModal
        title={title}
        handleClose={onClose}
        open={open}
        >
            <Stack direction='row' spacing={1} justifyContent='start' alignItems='center'>
                <Box className="container-audio">
                    <audio autoPlay src={signedUrl}  controls></audio>
                </Box>
                <IconButton onClick={onClose}>
                    <CancelIcon/>
                </IconButton>
            </Stack>
            <Box className='container-audio' sx={{ mx: 'auto', textAlign: 'center' }}>
                {[1, 2, 3, 4, 5, 6, 7, 8].map(e => (
                    <Box className="colum1" key={e} >
                        <Box className="row"></Box>
                    </Box>
                ))}
            </Box>
        </UiModal>

    )
}

export default PlayerModal