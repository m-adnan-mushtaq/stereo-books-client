import { Link as RouterLink } from 'react-router-dom'
import  Link  from '@mui/material/Link'
import PropTypes from "prop-types"

const NavLink = ({path,addons,children}) => {
  return (
    <Link underline='hover' {...addons} component={RouterLink} to={path}>
       {children}
    </Link>
  )
}


NavLink.propTypes={
    path:PropTypes.string.isRequired,
    addons:PropTypes.object
}
export default NavLink