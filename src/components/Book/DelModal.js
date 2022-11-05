import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDeletBookByIdMutation } from "store/api/uploadApiSlice";
import { useDispatch } from "react-redux";
import { openSnackBar } from "store/actionCreator";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import Typography from "@mui/material/Typography"
import Alert from "@mui/material/Alert"
import LoadingButton from "components/Ui/LoadingButton"
import UiModal from "components/Ui/UiModal"


const DelModal = ({ open, handleClose, id }) => {

    const [deleteBook, { isLoading, isError }] = useDeletBookByIdMutation()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const deleteBookHander=async ()=>{
        try {
            if(!id) return
            await deleteBook(id)
            navigate('/books')
            dispatch(openSnackBar('info','Book Content Delete Permanently!'))

        } catch (error) {
            // console.error(error)
        }
    }
    return (
        <UiModal
            title="Are you sure, you want to delete this?"
            open={open}
            handleClose={handleClose}
            dialogTitleConfig={{
                sx: {
                    bgcolor: 'pinkShade.main',
                    color: '#fff'
                }
            }}
        >
            <DialogContent>
                {isError ? <Typography sx={{ color: 'red' }} variant='h5'>Failed to Delete Book, Something Went Wrong, Try again later!</Typography>
                    : (
                        <>
                        {isLoading && <Alert severity="warning" >Don't Close this window, while we updating many things...</Alert> }
                        <DialogContentText>
                            After deleting, you won't be able to undo book, audio file will also be remove permanently!
                            This is a one way action, Be careful!
                        </DialogContentText>
                        </>
                    )
                }

            </DialogContent>
            <DialogActions>
                <Button disabled={isLoading} onClick={handleClose} color='secondary' >Cancel</Button>
                <LoadingButton
                    Icon={<DeleteForeverIcon />}
                    addons={{
                        color: 'pinkShade'
                    }}
                    disabled={isLoading}
                    loading={isLoading}
                    clicked={deleteBookHander}
                >
                    Confirm
                </LoadingButton>
            </DialogActions>
        </UiModal>
    )
}

export default DelModal