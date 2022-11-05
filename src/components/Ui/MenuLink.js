import { NavLink } from "react-router-dom";
import styled from "@mui/material/styles/styled";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from '@mui/material/Link'

import { motion } from "framer-motion";
import PropTypes from "prop-types"

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}
const MenuItemLink = styled(MenuItem)(({ theme }) => ({
    '&:has(a.active)':{
        backgroundColor:'#ffffff4d'
    },
    "& .MuiListItemIcon-root": {
        color: theme.palette.whiteColor.main,
    },
    "& .MuiListItemText-primary": {
        fontSize: "1.3rem",
    },
}));
const MenuLink = ({ Icon, to, text }) => {
    return (
        <MenuItemLink component={motion.li} variants={item}>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
            <Link underline='hover' variant='body1' sx={{ color: '#fff' }} component={NavLink} to={to} end>
                <ListItemText >{text}</ListItemText>
            </Link>
        </MenuItemLink>
    )
}

MenuLink.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default MenuLink