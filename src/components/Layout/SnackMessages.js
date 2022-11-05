import { useSelector , useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import { getSnack } from 'store/reducers/snackReducer';
import { closeSnackBar } from 'store/actionCreator';

const SnackMessages = (props) => {

    const {open,severity,message}=useSelector(getSnack)
    const dispatch=useDispatch()

    const handleClose=()=>{
        dispatch(closeSnackBar())
    }
  return (
      <Snackbar
      TransitionComponent={Slide}
      
      anchorOrigin={{vertical:'top',horizontal:'right'}}
       open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert variant='filled' onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
         {JSON.stringify(message)}
        </Alert>
      </Snackbar>
  )
}

export default SnackMessages