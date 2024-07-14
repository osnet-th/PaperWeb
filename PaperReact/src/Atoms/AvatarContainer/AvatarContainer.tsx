import {Avatar} from "@mui/material";
import img from "./img.png";

export const AvatarContainer = () => {
    return <Avatar
               src={img}
               sx={{margin:'20px', width:250, height: 350}}
    />
}