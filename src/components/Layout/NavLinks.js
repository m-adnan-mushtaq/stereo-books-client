import MenuList from "@mui/material/MenuList";

import HomeIcon from "@mui/icons-material/Home";
import EarbudsIcon from "@mui/icons-material/Earbuds";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { motion } from "framer-motion";
import MenuLink from "components/Ui/MenuLink";
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const linksArr = [
  {
    to: "/",
    text: "Home",
    Icon: HomeIcon,
  },
  {
    to: "/search",
    text: "Search",
    Icon: SearchIcon,
  },
  {
    to: "/books",
    text: "All Books",
    Icon: EarbudsIcon,
  },
  {
    to: "/about",
    text: "About Us",
    Icon: InfoIcon,
  },
  {
    to: "/contact",
    text: "Contact Us",
    Icon: ContactMailIcon,
  },
];

const NavLinks = () => {
  return (
    <MenuList
      sx={{ pt: "2rem", boxShadow: "none" }}
      component={motion.ul}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {linksArr.map(link=>(
        <MenuLink key={link.text} {...link} />
      ))}
    </MenuList>
  );
};

export default NavLinks;
