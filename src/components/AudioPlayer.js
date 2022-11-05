
import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "store/reducers/authReducer"
import { useLazyGetSignedUrlQuery } from "store/api/bookApiSlice"
import { openSnackBar } from "store/actionCreator"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import PlayDisabledIcon from '@mui/icons-material/PlayDisabled';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import  Alert  from "@mui/material/Alert"
import PlayerModal from "components/Book/PlayerModal"
import LoadingButton from "components/Ui/LoadingButton"
import "components/Book/media.css"

const AudioPlayer = ({title,fileKey,id}) => {
    const [open,setOpen]= useState(false)
    const dispatch= useDispatch()
    const user = useSelector(selectUser)
    const [triggerFn,{isLoading,isError,data}] = useLazyGetSignedUrlQuery() 

    const getUrl = async () => {
        try {
          await triggerFn({fileKey,id}).unwrap()
           setOpen(true)
        } catch (error) {
            dispatch(openSnackBar('error','Invalid Request, Try again!'))
        }
    }

    let content = (
        <Button variant='contained' size='large' endIcon={<PlayDisabledIcon />} component={Link} to='/sign-in'>
            Sign in to play
        </Button>
    )
    if (user) {
        content = (
            <>
                <LoadingButton
                clicked={getUrl}
                disabled={isLoading}
                loading={isLoading}
                align='left'
                addons={{
                    sx:{
                        borderRadius: '2em' 
                    }
                }}
                Icon={<PlayArrowIcon/>}
                >
                    Play Clip
                </LoadingButton>
            </>

        )
    }

    return (
        <Box sx={{ my: 2, pl: '2em' }}>
            {content}
            {isError && <Alert severity="error" >Failed to get Url, Check your Network or Try again!</Alert>}
            {data && 
                 <PlayerModal
                 title={title}
                 open={open}
                 signedUrl={data.signedUrl}
                 onClose={()=>{setOpen(false)}}
                 />
            }
           
        </Box>
    )
}

export default AudioPlayer