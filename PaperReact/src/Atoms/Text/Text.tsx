import {Typography} from "@mui/material";


interface Props {
    readonly text:string;
    readonly variant?:string;
}

export const Text = ({text, variant='h4'}: Props) => {
    // @ts-ignore
    return <Typography variant={variant}>{text}</Typography>
}