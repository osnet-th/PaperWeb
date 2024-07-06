import {Button} from "@mui/joy";


interface Props {
    readonly label: string;
    readonly onClick?: () => void;
}
export const ButtonA = ({label, onClick}:Props) => {
    return <Button onClick={onClick} fullWidth>{label}</Button>
}