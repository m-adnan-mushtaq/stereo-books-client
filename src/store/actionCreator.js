import { createAction } from "@reduxjs/toolkit";


export const openSnackBar=createAction('snackbar/open',function prepare(severity,message) {
    return {
        payload:{
            severity,
            message
        }
    }
})
export const closeSnackBar=createAction('snackbar/close')

//------ auth state actions creator--------------
export const setUserCredentials=createAction('auth/setUserCredentials')
export const removeUserCredentials=createAction('auth/removeUserCredentials')


