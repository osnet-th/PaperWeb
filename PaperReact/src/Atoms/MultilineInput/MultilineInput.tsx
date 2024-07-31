import {TextField} from "@mui/material";


export const MultilineInput = () => {
    return <>
        <TextField multiline={true} minRows="30" style={ {width:"100%", minHeight:"500px"}}/>
    </>
}
