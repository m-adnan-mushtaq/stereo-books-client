import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { cats } from 'utils/mock';


const CategoryFilter = ({value,handleChange}) => {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        {cats.map(cat=>(
           <FormControlLabel key={cat.label} value={cat.label} control={<Radio />} label={cat.label} />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export default CategoryFilter