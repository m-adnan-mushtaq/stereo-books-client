import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { openSnackBar } from "store/actionCreator";
import useValidation from "hooks/useValidation";
import { useNavigate } from "react-router-dom";
import { useSignUpMutation } from "store/api/authApiSlice";
import LoadingButton from "components/Ui/LoadingButton";
import NavLink from "components/AuxComp/NavLink";
import AnimateTransition from "components/Ui/AnimateTransition";
const containerVariants={
    hidden:{
      opacity:0,
      y:500
    },
    show:{
      opacity:1,
      y:0
    },
    exit:{
      opacity:0,
      y:'-100vh'
    }
  }
const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, changeName, isNameValid] = useValidation()
    const [email, changeEmail, isEmailValid] = useValidation()
    const [password, changePassword, isPasswordValid] = useValidation()
    const [signUp, { isLoading }] = useSignUpMutation()

    const submitHandler = async e => {
        e.preventDefault()
        try {
            if (!isNameValid || !isEmailValid || !isPasswordValid || isLoading) return

            const result = await signUp({
                name, email, password
            }).unwrap()
            if (!result.success) throw Error('something went wrong!')
            navigate('/sign-in')
            dispatch(openSnackBar('success', 'Successfully, signed Up!'))

        } catch (error) {
            // console.log(error.message)
            dispatch(openSnackBar('error', 'Invalid Credentials, or Network Error'))

        }
    }

    return (
        <AnimateTransition variants={containerVariants}>
            <Typography variant="h3" className="main-title" my={3} color='secondary'>
                Join Us Today
            </Typography>
            <Stack spacing={2} component='form' onSubmit={submitHandler} >
                <TextField
                    label='Your Name'
                    variant="outlined"
                    fullWidth
                    type='text'
                    color="secondary"
                    name="name"
                    value={name}
                    onChange={changeName}
                    error={!isNameValid}
                    helperText='Use only letters[a-zA-Z] and spaces'
                />
                <TextField
                    label='Your Email'
                    variant="outlined"
                    fullWidth
                    type='email'
                    color="secondary"
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
                    color="secondary"
                    name='password'
                    value={password}
                    onChange={changePassword}
                    error={!isPasswordValid}
                    helperText='Password must be 5 characters long'
                />
                <LoadingButton
                    loading={isLoading}
                    clicked={submitHandler}
                    disabled={!isNameValid || !isPasswordValid || !isEmailValid || !password || !email || !name}
                    addons={{
                        type: 'submit',
                        size: 'large',
                        color: 'secondary'
                    }}
                >
                    Continue
                </LoadingButton>
                <Typography textAlign='center'>
                    Already have an account <NavLink addons={{
                        color:'secondary',
                    }} path="/sign-in">Sign in here</NavLink>
                 </Typography>
            </Stack>
        </AnimateTransition>

    )
}

export default SignUp