import {Button} from "@mui/joy";


interface Props {
    readonly label: string;
    readonly onClick?: () => void;
    readonly size?: string;
}
export const ButtonA = ({label, onClick, size}:Props) => {
    if (size === "sm") {
        return <Button onClick={onClick}   size="sm" >{label}</Button>
    } else if(size === "lg"){
        return <Button onClick={onClick}   size="lg" >{label}</Button>
    }else {
        return <Button onClick={onClick}   fullWidth >{label}</Button>
    }
}