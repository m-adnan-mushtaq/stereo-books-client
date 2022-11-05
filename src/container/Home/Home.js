import Slider from "components/Slider/Slider";
import Search from "container/Search/Search";
import bookicon from "assets/book.png"
import CategoryList from "components/Home/CategoryList";
import Features from "components/Home/Features";
import Defination from "components/Home/Defination";
import Spinner from "components/Ui/Spinner";
import { useGetHomeDataQuery } from "store/api/homeApiSlice";
import Error from "components/Ui/Error";
import AnimateTransition from "components/Ui/AnimateTransition";

const containerVariants={
  hidden:{
    opacity:0,
    scale:1.2
  },
  show:{
    opacity:1,
    scale:1
  },
  exit:{
    opacity:0,
    scale:0.8
  }
}

const Home = () => {
  const { data, isLoading, isSuccess, error } = useGetHomeDataQuery()

  let content;
  if (isLoading) {
    content = (<Spinner />)
  }
  if (error) {
    content = (<Error
      error={'Failed to fetch books , Check Your Network'}
    />)
  }
  if (isSuccess && data) {
    content = (
      <>
        <Slider
          label='Most Recent Books'
          booksArr={data.recentBooks}
        />
        <Slider
          label={data.randomCat}

          bg='#f2f2f2'
          icon={bookicon}
          booksArr={data.randomBooks}
        />
      </>
    )
  }
  return (
    <AnimateTransition variants={containerVariants} >  
      <Search />
      {content}
      <CategoryList />
      <Features />
      <Defination />
    </AnimateTransition>
  );
};

export default Home;
