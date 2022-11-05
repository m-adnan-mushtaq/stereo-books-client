import FormGroup from "@mui/material/FormGroup"
import Box from "@mui/material/Box"
import FormControlLabel from "@mui/material/FormControlLabel"
import Switch from "@mui/material/Switch"

function createAuthorsList(authors,handleChange) {
    let tempArr = []
    for (const key in authors) {
        tempArr.push(
            <FormControlLabel
                key={key}
                control={<Switch
                    color="secondary"
                    onChange={handleChange}
                    name={key}
                />}
                label={authors[key].name}
            />
        )
    }
    return tempArr
}


const Authors = ({ authors, handleChange }) => {
    return (
        <Box my={3} sx={{ maxHeight: '40rem', overflow: 'auto' }}>
            <FormGroup>
               {createAuthorsList(authors,handleChange)}
            </FormGroup>
        </Box>
    )
}

export default Authors