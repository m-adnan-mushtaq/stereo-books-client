
import Stack from '@mui/material/Stack';

const Controls = ({ children}) => {
  return (
    <Stack direction='row' my={3} px={3} alignItems='end' justifyContent='flex-end'>
        {children}
    </Stack>
  )
}

export default Controls