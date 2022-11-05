import { motion } from "framer-motion"
import PropTypes from "prop-types"


const transitionVariants = {
    duration: 1, type: 'tween',
}

const variants = {
    hidden: { opacity: 0,  },
    show: { opacity: 1,  }
}
const AnimateInView = (props) => {
    return (
        <motion.div {...props.addons} viewport={{once:true}} variants={props.variants || variants} initial='hidden' whileInView='show'  transition={props.transition || transitionVariants} >
            {props.children}
        </motion.div>
  )
}


AnimateInView.propTypes={
    variants:PropTypes.object,
    addons:PropTypes.object,
    transition:PropTypes.object
}
export default AnimateInView