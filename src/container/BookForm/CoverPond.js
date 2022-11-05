import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useRef } from "react";
import FilePondInstance from "components/Form/FilePondInstance";
import { useDispatch } from "react-redux";
import { useUploadBookMutation } from "store/api/uploadApiSlice";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Controls from "components/Form/Controls";
import { openSnackBar } from "store/actionCreator";
import UploadSpinner from "components/Ui/UploadSpinner";

const coverPicConfig = {
  name: "coverPic",
  labelIdle: 'Drag & Drop Cover Pic or <span class="filepond--label-action">Browse</span>',
  acceptedFileTypes: ['image/jpg', 'image/jpeg', 'image/png'],
  labelFileTypeNotAllowed: 'File of invalid type, try using image formats!',
  maxFileSize: '4MB',
  labelMaxFileSizeExceeded: 'File is larger than 4MB, try using compress ones',
  labelMaxFileSize: 'Maximum file size is 4MB'
}
const CoverPond = () => {
  const { state } = useOutletContext()
  const [uploadBook, { isLoading }] = useUploadBookMutation()
  const navigate = useNavigate()
  const dispatchRf = useDispatch()
  const pond = useRef()

  const uploadBookHandler = async (e) => {
    try {
      let instance = pond.current
      if (!instance) return
      let fileCredentials = instance.getFile()
      if (!fileCredentials) {
        dispatchRf(openSnackBar('error', 'Make sure to select cover pic!'))
        return
      }
      //grab actual file
      const file = fileCredentials.file

      const { title, summary, category, audioFileKey } = state
      if (!title || !summary || !category || !audioFileKey) {
        dispatchRf(openSnackBar('error', 'Invalid Credentails!'))
        return
      }
      const formData = new FormData()
      formData.append('title', title)
      formData.append('summary', summary)
      formData.append('category', category.label)
      formData.append('audioFileKey', audioFileKey)
      formData.append('coverPic', file)
      const response = await uploadBook(formData).unwrap()
      let { id } = response
      if (!id) throw Error('Requet failed')
      navigate(`/books/${id}`)
      dispatchRf(openSnackBar('success', 'New Book added!'))
    } catch (error) {
      // console.error(error);
      dispatchRf(openSnackBar('error', 'Somethin Went Wrong, Check your Network, Try again!'))
    }

  }

  return (
    <Box sx={{ my: 5, mx: 'auto' }}>
      {(isLoading) ? (
        <UploadSpinner />
      ) : (
        <>
          <FilePondInstance
            ref={pond}
            config={coverPicConfig}
          />
          <Controls>
            <Button variant="contained" onClick={uploadBookHandler} endIcon={<FileUploadIcon />}>
              Finish
            </Button>
          </Controls>
        </>
      )}

    </Box>

  )
}

export default CoverPond