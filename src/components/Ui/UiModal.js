import PropTypes from "prop-types"
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

const UiModal = ({ open, handleClose, title, dialogConfig, dialogTitleConfig ,children}) => {
    return (
        <Dialog
            disableEscapeKeyDown
            open={open}
            {...dialogConfig}
            >
            <DialogTitle
             {...dialogTitleConfig} >
                {title}
            </DialogTitle>
            {children}
        </Dialog>
    )
}

UiModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose:PropTypes.func.isRequired,
    title:PropTypes.string.isRequired,
    dialogConfig:PropTypes.object,
    dialogTitleConfig:PropTypes.object
}
export default UiModal