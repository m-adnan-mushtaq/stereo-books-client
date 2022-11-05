import  Avatar from "@mui/material/Avatar";
import   ListItem from "@mui/material/ListItem";
import ListItemText  from "@mui/material/ListItemText";
import ListItemAvatar  from "@mui/material/ListItemAvatar";

const FeatureItem = ({title,desc,i}) => {
    return (
        <ListItem key={title}>
            <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    {i + 1}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={title} secondary={desc} primaryTypographyProps={{ sx: { fontSize: '1.4em', fontWeight: 'bold' } }} />
        </ListItem>
    )
}

export default FeatureItem