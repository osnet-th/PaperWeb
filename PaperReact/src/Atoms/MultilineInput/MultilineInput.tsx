import {TextField} from "@mui/material";


interface Props {
    readonly readOnly:boolean;
    readonly text: string;
    readonly onChange?:(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    readonly minRows: string;
}

export const MultilineInput = ({readOnly, text, minRows, onChange}:Props) => {

    return <>
        <TextField value={text} InputProps={{ readOnly: readOnly,}} multiline={true} minRows={minRows} style={ {width:"100%", minHeight:"500px"}}
            onChange={(e) => {
                if (onChange) {
                    onChange(e)
                }} }/>
    </>
}
