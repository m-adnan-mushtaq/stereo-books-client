import Layout from "Layout/Layout";
import { useGetrefreshTokenQuery } from "store/api/authApiSlice";
import { useSelector } from "react-redux";
import { selectToken } from "store/reducers/authReducer";
import AnimatedRoutes from "components/AnimatedRoutes";


function App() {
  const token=useSelector(selectToken)
  useGetrefreshTokenQuery(undefined,{
    skip:(!(!token) ||  (!localStorage.getItem('persist')))
  })
  return (
    <>
      <Layout>
        <AnimatedRoutes/>
      </Layout>
    </>
  );
}

export default App;
