
import { cats } from "utils/mock"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const CategoriesSelect = ({category,onChangeHandler}) => {
    return (
        <Autocomplete
            id="chosse-category"
            fullWidth
            options={cats}
            autoHighlight
            value={category}
            onChange={onChangeHandler}
            getOptionLabel={(option) => option.label}
            renderOption={(props, { label, Icon }) => (
                <Box component="li" {...props}>
                    <Icon
                        sx={{ mr: 2 }}
                    />
                    {label}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant='standard'
                    label="Choose a Category"
                    required
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    )
}

export default  (CategoriesSelect)