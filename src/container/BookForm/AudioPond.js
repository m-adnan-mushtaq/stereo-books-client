import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import Controls from "components/Form/Controls"
import Box from "@mui/material/Box";
import FilePondInstance from "components/Form/FilePondInstance";
import LoadingButton from "components/Ui/LoadingButton";
import { useDispatch } from "react-redux";
import { openSnackBar } from "store/actionCreator";
import { useUploadAudioFileMutation } from "store/api/uploadApiSlice";

const audioConfig = {
  name: "bookAudio",
  labelIdle: 'Drag & Drop Audio File or <span class="filepond--label-action">Browse</span>',
  acceptedFileTypes: ['audio/mpeg', 'audio/mp4', 'audio/mp3', 'audio/wav'],
  labelFileTypeNotAllowed: 'File of invalid type, try using audio formats!',
  maxFileSize: '150MB',
  labelMaxFileSizeExceeded: 'File is larger than 150MB, try using compress ones',
  labelMaxFileSize: 'Maximum file size is 150MB'
}

const AudioPond = () => {
  const { setActiveStep , dispatch } = useOutletContext()
  const navigate= useNavigate()
  const dispatchRf = useDispatch()
  const pond = useRef()
  const [uploadAudio,{isLoading}]= useUploadAudioFileMutation()

  const uploadAudioHandler = async (e) => {
    try {
      let instance = pond.current
      if (!instance) return
      let fileCredentials = instance.getFile()
      if (!fileCredentials) {
        dispatchRf(openSnackBar('error', 'Make sure to select audio file!'))
        return
      }
      //grab actual file
      const formData = new FormData()
      let file = fileCredentials.file
      formData.append('bookAudio', file)
      const response = await uploadAudio(formData).unwrap()
      let {key} = response
      if(!key) throw Error('failed to upload')
      dispatch({
        type:'updateAudioFile',
        payload:key
      })
      // console.log(response);

      setActiveStep(2)
      navigate('/createBook/chooseCover')
      dispatchRf(openSnackBar('success','Audio File has been uploaded!'))
    } catch (error) {
      // console.error(error);
      dispatchRf(openSnackBar('error', 'Somethin Went Wrong, Check your Network, Try again!'))

    }

  }

  return (
    <Box sx={{ my: 5, mx: 'auto' }}>
      <FilePondInstance
        config={audioConfig}
        ref={pond}
      />

      <Controls>
        <LoadingButton
          clicked={uploadAudioHandler}
          disabled={isLoading}
          loading={isLoading}

        >
          Upload
        </LoadingButton>
      </Controls>
    </Box>

  )
}

export default AudioPond