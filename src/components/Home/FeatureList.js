import AnimateInView from "components/Ui/AnimateInView"
import FeatureItem from "components/Home/FeatureItem";
import Paper  from "@mui/material/Paper";
import  List from "@mui/material/List";
import { containerVariants } from "utils/Ui";
const FeatureList = ({ features }) => {
    return (
        <AnimateInView
        variants={{
           hidden:{
             opacity:0,
             y:200
           },
           show:{
            y:0,
            opacity:1,
            transition:{
                delay:0.5,
                duration:1,
                type:'tween'
            }
           }
        }}
        >
            <Paper sx={{ backgroundColor: '#f5f6f9', p: '2em 1em' }} >
                    <List
                    >
                    <AnimateInView
                    variants={containerVariants}
                    >
                        {features.map((elm, i) => (
                            <AnimateInView 
                            variants={{
                                hidden:{
                                    opacity:0
                                },
                                show:{
                                    opacity:1
                                }
                            }}
                             key={elm.title}>
                                <FeatureItem
                                    {...elm}
                                    i={i}
                                />
                            </AnimateInView>
                        ))}
                     </AnimateInView>
                    </List>
            </Paper>
        </AnimateInView>
    )
}

export default FeatureList