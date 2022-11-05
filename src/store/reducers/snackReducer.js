const { createReducer } = require("@reduxjs/toolkit")
const { openSnackBar, closeSnackBar } = require("store/actionCreator")

const initialState={
    open:false,
    severity:'info',
    message:''
}

//create reducer
const snackReducer=createReducer(initialState,builder=>{
    builder.addCase(openSnackBar,(state,{payload})=>{
        state.open=true
        state.severity=payload.severity
        state.message=payload.message
    })
    builder.addCase(closeSnackBar,(state)=>{
        state.open=false
        state.severity='info'
        state.message=''
    })
})


//selectors
export const getSnack=(state)=>state.snack

export default snackReducer