import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useValidation from "hooks/useValidation";
import { useDispatch, useSelector } from "react-redux";
import { useSignInMutation } from "store/api/authApiSlice";
import { openSnackBar, setUserCredentials } from "store/actionCreator";
import LoadingButton from "components/Ui/LoadingButton";
import { selectUser } from "store/reducers/authReducer";
import { useNavigate } from "react-router-dom";
import NavLink from "components/AuxComp/NavLink";
import AnimateTransition from "components/Ui/AnimateTransition";

const containerVariants={
  hidden:{
    opacity:0,
    y:'-100vh'
  },
  show:{
    opacity:1,
    y:0
  },
  exit:{
    opacity:0,
    y:500
  }
}


const Signin = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [signIn,{isLoading}]=useSignInMutation()
  const user=useSelector(selectUser)

  const [email, changeEmail, isEmailValid] = useValidation()
  const [password, changePassword, isPasswordValid] = useValidation()

  //function that  handle login
  const submitHandler=async e=>{
    e.preventDefault()
    try {
      if(!isEmailValid || !isPasswordValid || isLoading) return 
      //get result
      const result=await signIn({
        email,password
      }).unwrap()
      dispatch(setUserCredentials({
        token:result.accessToken,
        user:result.user
      }))
      //persist the user data
      localStorage.setItem('persist',true)
    } catch (error) {
      // console.log(error.message)
      dispatch(openSnackBar('error','Invalid Credentials or Network Error'))
    }
  }

  useEffect(()=>{
    if(user) navigate('/createBook')
  },[user,navigate])
  return (
    <AnimateTransition variants={containerVariants} >
      <Typography variant="h3" className="main-title" my={3} color='primary'>
        Welcome Back
      </Typography>
      <Stack spacing={2} component='form' onSubmit={submitHandler} >

        <TextField
          label='Your Email'
          variant="outlined"
          fullWidth
          type='email'
          name='email'
          value={email}
          onChange={changeEmail}
          error={!isEmailValid}
          helperText='Enter a valid Email address'
        />
        <TextField
          label='Your Password'
          type='password'
          variant="outlined"
          fullWidth
          name='password'
          value={password}
          onChange={changePassword}
          error={!isPasswordValid}
          helperText='Password must be 5 characters long'
        />
        <LoadingButton
          
          disabled={!isEmailValid || !isPasswordValid || !password || !email || isLoading}
          loading={isLoading}
          clicked={submitHandler}
          addons={{
            size:'large',
            type:'submit',
            mx:'auto'
          }}
        >
            Continue
        </LoadingButton>
        <Typography textAlign='center'>
            Not have an account yet <NavLink path="/sign-up" >Sign Up here</NavLink>
        </Typography>
      </Stack>
    </AnimateTransition>
  )
}

export default Signin