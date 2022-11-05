import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import bookIcon from "assets/book-stack.png";
import { BlockImg } from "utils/Ui";
import { motion } from "framer-motion";
import AnimateInView from "components/Ui/AnimateInView";
import Book from "components/Slider/Book";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import NavLink from "components/AuxComp/NavLink";

const bookInfoVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};
const sliderItem = {
  hidden: { opacity: 0, x: 300 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

const sliderOptions={
    type: "slide",
    perPage: 2,
    perMove: 1,
    pauseOnHover: true,
    speed: 1000,
    gap: "1em",
    pagination: false,
    cover: true,
    breakpoints: {
      700: {
        perPage: 1,
      },
    },
  }
const Slider = (props) => {
  return (
    <>
      <Box sx={{ backgroundColor: `${props.bg || '#ffff'}`, py: "5em" }}>
        <AnimateInView
          transition={{ delay: 1, staggerChildren: 0.5, delayChildren: 0.3 }}
        >
          <Grid p={3} container alignItems="center" justifyContent="center" spacing={2}> 
            <Grid item sm={4}>
              <AnimateInView variants={bookInfoVariants}>
                <Box sx={{ textAlign: "right", width: "25%", mx: "auto" }}>
                  <BlockImg loading="lazy" src={props.icon || bookIcon} alt="most recent books" />
                </Box>
                <Typography
                  variant="h3"
                  color="secondary"
                  className="main-title"
                >
                  {props.label || 'Most Recent Books'}
                </Typography>
                <Divider
                  light={false}
                  textAlign="left"
                  sx={{ "&::after , &::before": { borderColor: "#000" } }}
                >
                  <Typography variant="h6">Free Audio Books</Typography>
                </Divider>
              </AnimateInView>
            </Grid>
            <Grid item sm={8} component={motion.div} sx={{overflow:'hidden',px:2}}>
              <AnimateInView variants={sliderItem}>
                      {
                        props.booksArr.length?(
                          <Splide
                          options={sliderOptions}
                        >
                          {props.booksArr.map(({_id:id,title,author,category,coverPicUrl}) => (
                            <SplideSlide key={id}>
                              <Book
                              title={title}
                              id={id}
                              author={author}
                              category={category}
                              coverPicUrl={coverPicUrl}
                              />
                            </SplideSlide>
                          ))}
                        </Splide>
                        ):(
                          <Alert severity="info">
                          <AlertTitle>No Books Found</AlertTitle>
                          Try adding some books — <NavLink path="/createBook">check it out!</NavLink>
                        </Alert>
                        )
                      }
                       
              </AnimateInView>
            </Grid>
          </Grid>
        </AnimateInView>
      </Box>
    </>
  );
};

export default Slider;
