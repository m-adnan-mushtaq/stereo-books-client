//create store
import { configureStore} from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "./reducers/authReducer";
import snackReducer from "./reducers/snackReducer";

export const store=configureStore({
    reducer:{
        snack:snackReducer,
        auth:authReducer,
        [apiSlice.reducerPath]:apiSlice.reducer
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(apiSlice.middleware),
    devTools:process.env.NODE_ENV!=='production'
})