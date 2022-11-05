import { useState } from "react";
import { BlockImg } from "utils/Ui";
import { useGetBookByIdQuery } from "store/api/bookApiSlice";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "store/reducers/authReducer";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip  from "@mui/material/Tooltip";
import Spinner from "components/Ui/Spinner";
import Error from "components/Ui/Error";
import AnimateInView from "components/Ui/AnimateInView";
import AudioPlayer from "components/AudioPlayer";
import BookCard from "components/Slider/Book";
import DelModal from "components/Book/DelModal";

const Book = () => {
  const { id } = useParams();
  const user = useSelector(selectUser);
  const { data, isLoading, isSuccess, error } = useGetBookByIdQuery(id, {
    skip: !id,
  });
  const [openDelModal,setOpenDelModal]= useState(false)
  let content;
  if (isLoading) {
    content = <Spinner />;
  }
  if (error) {
    content = <Error error={error.data?.error} />;
  }
  if (data && isSuccess) {
    let { book, randomBooks } = data;
    content = (
      <>
        <Paper elevation={5} sx={{ p: 2, m: "4em 2em" }}>
          <Grid container spacing={3}>
            <Grid item md={5} alignItems="center" justifyContent="center">
              <Box
                sx={{
                  width: "80%",
                  textAlign: "center",
                  mx: "auto",
                  p: "1em 2em",
                }}
              >
                <BlockImg
                  src={book.coverPicUrl}
                  alt={book.title}
                  loading="lazy"
                  sx={{ mx: "auto" }}
                />
              </Box>
            </Grid>
            <Grid item md={7}>
              <Stack direction="row" justifyContent="start" alignItems="center">
                <Typography
                  sx={{ typography: { xs: "h5", md: "h4", flex: 1 } }}
                  color="primary"
                  align="center"
                  my={2}
                >
                  {book.title}
                </Typography>
                {user && user._id === book.author?._id.toString() && (
                  <Tooltip
                    title="Delete Book"
                    placement="left"
                    arrow
                    color="pinkShade"
                  >
                    <IconButton 
                    onClick={()=>setOpenDelModal(true)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Stack>
              <Typography variant="h5" color="secondary" my={1} noWrap>
                Summary
              </Typography>
              <Typography variant="body2" mb={4}>
                {book.summary}
              </Typography>
              <Divider
                textAlign="right"
                variant="middle"
                sx={{ maxWidth: "15rem" }}
              >
                <Chip color="secondary" label={book.author?.name} />
              </Divider>
              <AudioPlayer
                title={book.title}
                fileKey={book.fileKey}
                id={book._id}
              />
            </Grid>
          </Grid>
        </Paper>
        <Typography variant="h3" my={4} align="center" color="primary">
          People also liked
        </Typography>
        <AnimateInView
          variants={{
            hidden: {
              x: 500,
              opacity: 0,
            },
            show: {
              x: 0,
              opacity: 1,
            },
          }}
        >
          <Grid
            container
            spacing={5}
            sx={{ px: "5em" }}
            alignItems="center"
            justifyContent="center"
          >
            {randomBooks.map(({ _id: id, title, author, category,coverPicUrl }) => (
              <Grid item key={id} sm={6} md={4}>
                <BookCard
                  id={id}
                  title={title}
                  category={category}
                  author={author}
                  coverPicUrl={coverPicUrl}
                />
              </Grid>
            ))}
          </Grid>
        </AnimateInView>
        {/* delete confirmation modal */}
        <DelModal
        open={openDelModal}
        handleClose={()=>setOpenDelModal(false)}
        id={book._id}
        />
      </>
    );
  }
  return (
    <Box p={2} mb={5}>
      {content}
    </Box>
  );
};

export default Book;
