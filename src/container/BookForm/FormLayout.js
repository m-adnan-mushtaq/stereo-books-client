import { useReducer,  useState } from "react";
import { Outlet } from "react-router-dom"
import Box from '@mui/material/Box';
import Steps from "components/Form/Steps";
import { updateObject } from "utils/util";


const steps = ['Enter Book Credentials', 'Upload Audio File', 'Choose Cover Picture']

const initalState={
  title:'',
  summary:'',
  category:null,
  audioFileKey:null,
  coverPic:null
}

function bookReducer(state,{type,payload}){
  switch (type) {
    case 'updateTitle': return updateObject(state,{title:payload})
    case 'updateSummary': return updateObject(state,{summary:payload})
    case 'updateCategory': return updateObject(state,{category:payload})
    case 'updateAudioFile': return updateObject(state,{audioFileKey:payload})
    case 'updateCoverPic': return updateObject(state,{coverPic:payload})
    default: return state
  }
}

const FormLayout = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [state,dispatch]=useReducer(bookReducer,initalState)

  return (
    <Box my={10} mx={3} px={10} py={3}>
      <Steps
        activeStep={activeStep}
        steps={steps}
      />
      <Outlet
      context={{
        activeStep,setActiveStep,
        state,dispatch
      }}
       />
    </Box>
  )
}

export default FormLayout