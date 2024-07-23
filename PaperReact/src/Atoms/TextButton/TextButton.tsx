import Button from "@mui/material/Button";
import * as React from "react";



interface Props {
    readonly text:string;
    readonly onClick?: () => void;
}

export const TextButton = ({text, onClick}:Props) => {
    return <Button onClick={onClick}>{text}</Button>;
}
