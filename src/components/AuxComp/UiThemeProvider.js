import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
    palette: {
        primary: {
            main: '#06d6a0',
            contrastText: '#fff'
        },
        secondary: {
            main: '#1b9aaa',
            contrastText: '#fff'
        },
        pinkShade: {
            main: '#ef476f',
            contrastText: '#fff'
        },
        lightBg: {
            main: '#f5f6f9',
            contrastText: '#000'
        },
        whiteColor:{
            main:'#fff',
            contrastText:'#000'
        }
        

    }
})
const UiThemeProvider = ({children}) => {
  return (
   <ThemeProvider theme={theme}>
    {children}
   </ThemeProvider>
  )
}

export default UiThemeProvider