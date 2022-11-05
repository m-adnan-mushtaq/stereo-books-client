import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion"
import { Route, Routes } from "react-router-dom";
import Spinner from "./Ui/Spinner";
const Home=lazy(()=>import("container/Home/Home"))
const Search = lazy(()=>import("container/Search/Search"));
const Books = lazy(()=>import("container/Books/Books"));
const About = lazy(()=>import("container/About"));
const Contact = lazy(()=>import("container/Contact/Contact"));
const Wrapper = lazy(()=>import("components/Auth/Wrapper"));
const Signin = lazy(()=>import("container/Auth/Signin"));
const SignUp = lazy(()=>import("container/Auth/SignUp"));
const Book = lazy(()=>import("container/Book"));
const FormLayout = lazy(()=>import("container/BookForm/FormLayout"));
const Form = lazy(()=>import("container/BookForm/Form"));
const AudioPond = lazy(()=>import("container/BookForm/AudioPond"));
const CoverPond = lazy(()=>import("container/BookForm/CoverPond"));
const GuardRoute = lazy(()=>import("components/GuardRoute"));
const Logout = lazy(()=>import("container/Auth/Logout"));

const AnimatedRoutes = () => {
    return (
        <>
            <AnimatePresence mode="wait" >
                <Suspense fallback={<Spinner/>}>
                <Routes>
                    {/* public routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/books" element={<Books />} />
                    <Route path="/books/:id" element={<Book />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/sign-in" element={<Wrapper><Signin /></Wrapper>} />
                    <Route path="/sign-up" element={<Wrapper><SignUp /></Wrapper>} />

                    {/* private routes */}
                    <Route element={<GuardRoute />}>
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/createBook" element={<FormLayout />}>
                            <Route index element={<Form />} />
                            <Route path='uploadAudio' element={<AudioPond />} />
                            <Route path='chooseCover' element={<CoverPond />} />
                        </Route>
                    </Route>
                </Routes>
                </Suspense>
            </AnimatePresence>
        </>
    )
}

export default AnimatedRoutes