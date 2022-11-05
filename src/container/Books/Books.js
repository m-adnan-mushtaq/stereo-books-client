import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useGetUsersQuery } from "store/api/homeApiSlice"
import { useGetPaginatedBooksQuery } from "store/api/bookApiSlice"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import Chip from "@mui/material/Chip"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Alert from "@mui/material/Alert"
import CircularProgress from "@mui/material/CircularProgress"
import Pagination from "@mui/material/Pagination"
import Book from "components/Slider/Book"
import Stack from "@mui/material/Stack"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import  TextField  from "@mui/material/TextField"
import ClearIcon from '@mui/icons-material/Clear';
import CategoryFilter from "components/Books/CategoryFilter"
import Authors from "components/Books/Authors"
import Spinner from "components/Ui/Spinner"
import Error from "components/Ui/Error"
import useDebounce from "hooks/useDebounce"
import AnimateTransition from "components/Ui/AnimateTransition"




const Books = () => {
    const [page, setPage] = useState(1)
    const [searchParams] = useSearchParams()
    const [category, setCategory] = useState(searchParams.get('category') || '')
    const [authors, setAuthors] = useState({})
    const [search,setSearch] = useState(searchParams.get('q') || '')
    const delayedSearch=useDebounce(search,1500)
    const { isError: fuError, isLoading: fuLoading, data: users } = useGetUsersQuery()
    const { isError, isLoading, isSuccess, data } = useGetPaginatedBooksQuery({
        page, category, authors, search :delayedSearch
    })
    const handlePageChange = (event, value) => {
        setPage(value)
    }

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    const handleAuthorChange = (event) => {

        let targetAuthor = { ...authors }[event.target.name]
        let updatedAuthor = {
            ...targetAuthor,
            checked: event.target.checked
        }
        setAuthors({
            ...authors,
            [event.target.name]: updatedAuthor

        });
    };
    const clearFilters = () => {
        setCategory('')
        setAuthors({})
        setSearch('')
    }

    let content;
    if (isLoading) {
        content = (<Spinner />)
    }
    if (isError) {
        content = (<Error
            error={'Failed to fetch books,Check your Network'}
        />)
    }
    if (isSuccess && data) {
        let { foundBooks, totalPages } = data
        content = (
            <>
                <Grid container spacing={3} pr={2} alignItems='center' justifyContent='center'>
                    {foundBooks.length?(
                         foundBooks.map(({ _id: id, title, author, category ,coverPicUrl}) => (
                            <Grid item key={id} sm={6} >
                                <Book
                                    id={id}
                                    title={title}
                                    author={author}
                                    category={category}
                                    coverPicUrl={coverPicUrl}
                                />
                            </Grid>
                        ))
                    ):(
                        <Alert severity="info" sx={{width:'100%',my:4}}>
                            No Books found!
                        </Alert>
                    )}
                   
                </Grid>
                <Box my={5} textAlign='center'>
                    <Pagination
                        size="large"
                        color='primary'
                        page={page}
                        onChange={handlePageChange}
                        count={totalPages}
                        variant='outlined'
                    />
                </Box>
            </>
        )
    }
    return (
        <AnimateTransition>
        <Box pt={10} mb={10}>

            <Grid container justifyContent='center' >
                <Grid item sm={4} px={3}>
                    <Box my={3}>
                        <Divider textAlign="left" >
                            <Chip label='Search' />
                        </Divider>
                        <TextField
                            margin="dense"
                            placeholder="type title..."
                            sx={{
                                '.MuiOutlinedInput-root':{
                                    borderRadius:'3em'
                                }
                            }}
                            type='text'
                            variant='outlined'
                            value={search}
                            onChange={({target:{value}})=>setSearch(value)}
                        />
                    </Box>
                    <Box mb={3} mt={1}>
                        <Divider textAlign="left" >
                            <Chip label='Generes' color="primary" />
                        </Divider>
                        <CategoryFilter
                            value={category}
                            handleChange={handleChangeCategory}
                        />
                    </Box>
                    <Divider textAlign="left" >
                        <Chip label='Authors' color="secondary" />
                    </Divider>
                    {
                        (fuLoading) ? (
                            <Box sx={{ my: 4, textAlign: 'center' }}>
                                <CircularProgress />
                            </Box>
                        ) : (
                            fuError ? (
                                <Alert sx={{ my: 4 }} severity='error'>Failed to fetch users</Alert>
                            ) : (
                                <Authors
                                    authors={users}
                                    handleChange={handleAuthorChange}
                                />
                            )
                        )
                    }


                </Grid>

                <Grid item sm={8}>
                    <Stack direction='row' justifyContent='space-between' alignItems='center'>
                        <Typography variant="h4" my={3} className='main-title' color='primary'  >
                            Book List
                        </Typography>
                        <Box mr={3}>
                            <Tooltip arrow title='clear filters' placement="left" >
                                <IconButton
                                    onClick={clearFilters}
                                    aria-label="clear filters">
                                    <ClearIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Stack>
                    {content}
                </Grid>

            </Grid>
        </Box>
        </AnimateTransition>

    )
}

export default Books