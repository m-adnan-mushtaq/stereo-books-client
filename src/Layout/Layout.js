import UiThemeProvider from 'components/AuxComp/UiThemeProvider'
import Footer from 'components/Layout/Footer'
import Navbar from 'components/Layout/Navbar'
import SnackMessages from 'components/Layout/SnackMessages'

const Layout = ({children}) => {
  return (
    <UiThemeProvider>
      <SnackMessages/>
      <Navbar/>
    {children}
    <Footer/>
    </UiThemeProvider>
  )
}

export default Layout