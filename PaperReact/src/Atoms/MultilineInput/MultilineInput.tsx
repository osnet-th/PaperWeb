import {TextField} from "@mui/material";


interface Props {
    readonly readOnly:boolean;
    readonly text: string;
    readonly onChange?:(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export const MultilineInput = ({readOnly,text,onChange}:Props) => {

    return <>
        <TextField value={text} InputProps={{ readOnly: readOnly,}} multiline={true} minRows="30" style={ {width:"100%", minHeight:"500px"}}
            onChange={(e) => {
                if (onChange) {
                    onChange(e)
                }} }/>
    </>
}
