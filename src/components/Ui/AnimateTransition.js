import { motion } from "framer-motion"

const defaultVariants={
    hidden:{
        opacity:0
    },
    show:{
        opacity:1
    },
    exit:{
        opacity:0
    }
}

const AnimateTransition = ({variants,children}) => {
  return (
    <motion.div
    variants={variants || defaultVariants}
    initial='hidden'
    animate='show'
    exit='exit'
    transition={{duration:1}}
    >
        {children}
    </motion.div>
  )
}

export default AnimateTransition