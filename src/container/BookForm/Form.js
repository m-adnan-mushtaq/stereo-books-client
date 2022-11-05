import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CategoriesSelect from "components/Form/CategoriesSelect";
import  Button  from "@mui/material/Button";
import Controls from "components/Form/Controls";
import { Link, useOutletContext } from "react-router-dom";
const Form = () => {
        const {setActiveStep , state,dispatch }=useOutletContext()
        const {title,category,summary} = state
        const onChangeHandler=(event,newValue)=>{
            dispatch({
                type:'updateCategory',
                payload:newValue
            })
        }
    return (
        <>
            <Typography variant="h4" align="center" className="main-title" my={3} color='primary' >
                Enter Book Credentials
            </Typography>
            <Stack spacing={4} sx={{ width: '90%', maxWidth: '30rem', mx: 'auto' }}>
                <TextField
                    label='Book Title'
                    variant="standard"
                    fullWidth
                    type='text'
                    required
                    value={title}
                    onChange={({target:{value}})=>dispatch({type:'updateTitle',payload:value})}
                />
                <CategoriesSelect
                    category={category}
                    onChangeHandler={onChangeHandler}
                 />
                <TextField
                    label='Book Summary'
                    variant="standard"
                    multiline
                    rows={3}
                    fullWidth
                    type='text'
                    required
                    value={summary}
                    onChange={({target:{value}})=>dispatch({type:'updateSummary',payload:value})}

                />
            </Stack>
            <Controls>
                <Button
                 disabled={
                    !title || !summary || !category
                 }
                 onClick={()=>setActiveStep(1)} component={Link} to='/createBook/uploadAudio' variant="contained">
                    Create
                </Button>
            </Controls>
        </>
    )
}

export default Form