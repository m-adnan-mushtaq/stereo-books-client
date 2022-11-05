
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Button from '@mui/material/Button';
import PropTypes from "prop-types"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const LoadingButton = ({ loading, disabled, clicked, addons , Icon, children,align}) => {
    return (
        <Box sx={{ m: 1, position: 'relative' ,textAlign:align || 'center'}}>
            <Button
                variant="contained"
                disabled={disabled}
                onClick={clicked}
                endIcon={Icon || <ExitToAppIcon/>}
                {...addons}
            >
                {children}
            </Button>
            {loading && (
                <CircularProgress
                    size={24}
                    sx={{
                        color: green[500],
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                    }}
                />
            )}
        </Box>
    )
}



LoadingButton.propTypes={
    loading:PropTypes.bool.isRequired,
    addons:PropTypes.object,
    disabled:PropTypes.bool,
    clicked:PropTypes.func.isRequired,
}
export default LoadingButton