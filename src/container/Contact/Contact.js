import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import wave from "assets/wave.svg"
import { motion } from "framer-motion"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Alert from "@mui/material/Alert"
import SendIcon from "@mui/icons-material/Send"
import "./contact.css"
import AnimateTransition from "components/Ui/AnimateTransition";

const containerVariants={
    hidden:{
      opacity:0,
      x:'-100vw'
    },
    show:{
      opacity:1,
      x:0
    },
    exit:{
      opacity:0,
      x:500
    }
  }

const Contact = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()
    const [msg, setMsg] = useState(null)
    const [loading, setLoading] = useState(false)
    const form = useRef()
    const mailLetter = useRef()
    const mailTop = useRef()

    const handleSendFrom = e => {
        e.preventDefault()
        let to_email = emailRef.current.value
        let to_name = nameRef.current.value
        let to_message = messageRef.current.value
        if (!to_name || !to_email || !to_message) return
        setLoading(true)
        to_name = to_name.trim()
        to_email = to_email.trim()
        mailLetter.current.classList.add('move');
        mailTop.current.classList.add('closed');
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
            .then((result) => {
                form.current.reset()
                setMsg({
                    severity:'success',
                    message:'Your Message received!, we will respond you ASAP'
                })

            }, (error) => {
                setMsg({
                    severity:'error',
                    message:error.text
                })
            }).finally(() => {
                mailLetter.current.classList.remove('move');
                mailTop.current.classList.remove('closed');
                setLoading(false)
            })
    }
    return (
        <AnimateTransition  variants={containerVariants}>

        
        <Box sx={{ mb: 10 }}>
            <Box component={motion.div}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                sx={{ backgroundImage: `url(${wave})`, backgroundSize: 'cover', backgroundPosition: 'center center', minHeight: "15rem", }}>
                <Typography variant="h2" color='#fff' align="center" pt={3}>
                    Contact Us
                </Typography>
            </Box>
            <Grid container alignItems='center' my={2} px={3} spacing={3} justifyContent='center'>
                <Grid item md={7}>
                    {msg && <Alert severity={msg.severity}>{msg.message}</Alert>}
                    <Box ref={form} component='form' onSubmit={handleSendFrom}>
                        <Stack direction='row' my={3} spacing={2}>
                            <TextField
                                variant="filled"
                                label='Your Name'
                                fullWidth
                                required
                                name="to_name"
                                inputRef={nameRef}
                            />
                            <TextField
                                variant="filled"
                                label='Your Email'
                                type='email'
                                rows={5}
                                fullWidth
                                required
                                inputRef={emailRef}
                                name='email'
                            />
                        </Stack>
                        <TextField
                            variant="filled"
                            label='Your Message'
                            multiline
                            fullWidth
                            inputRef={messageRef}
                            rows={3}
                            name='message'
                        />
                        <Box mt={3} textAlign='center'>
                            <Button disabled={loading} variant="contained" type="submit" size="large" endIcon={<SendIcon />}>
                                Drop Mail
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={5}  >
                    <div className="container-mail">
                        <div className="container-mail">
                            <div className="mail ">
                                <div className="mail__back"></div>
                                <div className="mail__top" ref={mailTop}></div>
                                <div className="mail__letter "
                                    ref={mailLetter}
                                >
                                    <div className="mail__letter-square">
                                    </div>
                                    <div className="mail__letter-lines">
                                    </div>
                                </div>
                                <div className="mail__left"></div>
                                <div className="mail__right"></div>
                                <div className="mail__bottom"></div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
        </AnimateTransition>
    )
}
export default Contact