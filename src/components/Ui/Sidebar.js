import PropTypes from "prop-types"
import  SwipeableDrawer  from "@mui/material/SwipeableDrawer"
const Sidebar = (props) => {
  return (
    <SwipeableDrawer
      anchor={props.anchor}
      open={props.open}
      onClose={props.closeDrawer}
      onOpen={props.openDrawer}
      PaperProps={{sx:{bgcolor:props.bgColor}}}
    
    >
     {props.children}
    </SwipeableDrawer>
  )
}

Sidebar.propTypes={
    anchor:PropTypes.string.isRequired,
    open:PropTypes.bool.isRequired,
    openDrawer:PropTypes.func.isRequired,
    closeDrawer:PropTypes.func.isRequired,
    bgColor:PropTypes.string.isRequired
}

export default Sidebar