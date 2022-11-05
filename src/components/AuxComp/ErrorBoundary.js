// error boundary for error handling in app not to crash app 
import React, { Component } from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
class ErrorBoundary extends Component {
    // component did catch 
    state = { hasError: false, errorMsg: '' }
    componentDidCatch = (error, info) => {
        // console.error( error);
        this.setState({ hasError: true, errorMsg: JSON.stringify(error) })
    }
    render() {
        // if there is error show error otherwise show it's children wrapped element
        if (this.state.hasError) {
            return (
                <Stack justifyContent='center' alignItems='center' sx={{ p: 5 }} >
                    <Alert>
                    <AlertTitle>Aw, Snap Something Broken</AlertTitle>
                    {this.state.errorMsg} <strong>Try again later...</strong>
                    </Alert>
                </Stack >
            )
        }
        return (
            <>
                {this.props.children}
            </>

        )
    }
}

export default ErrorBoundary;