import {TextField} from "@mui/material";


interface Props {
    readonly onChange:(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export const MultilineInput = ({onChange}:Props) => {

    return <>
        <TextField multiline={true} minRows="30" style={ {width:"100%", minHeight:"500px"}}
            onChange={(e) => {onChange(e)} }/>
    </>
}
