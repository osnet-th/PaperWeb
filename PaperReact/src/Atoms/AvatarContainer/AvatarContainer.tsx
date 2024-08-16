import {Avatar} from "@mui/material";
import img from "./img.png";

interface Props {
    readonly imgUrl:string ;
}
export const AvatarContainer = ({imgUrl}:Props) => {
    console.log("127.0.0.1:8080"+imgUrl);
    return <Avatar
               src={"http://localhost:8080"+imgUrl}
               sx={{margin:'20px', width:250, height: 350}}
    />
}