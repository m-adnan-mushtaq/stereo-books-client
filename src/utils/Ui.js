import  styled  from "@mui/material/styles/styled";

const imgOptions={
    display:'block',
    maxWidth:'100%',
    objectFit:'cover',
    margin:'auto',
    objectPosition:'center',
    maxHeight:'100%',
}

const BlockImg = styled('img')(imgOptions)

const CardImg=styled('img')({
    ...imgOptions,
    transform:'rotateZ(-20deg)',
    maxWidth:'200px !important',
    borderRadius:'1em',
})

const containerVariants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            delay:0.5,
            staggerChildren: 0.5,
            delayChildren: 1
        }
    }
}
export {BlockImg,CardImg,containerVariants}