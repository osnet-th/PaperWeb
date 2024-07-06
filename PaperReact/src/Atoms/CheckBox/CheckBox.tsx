import Checkbox from '@mui/joy/Checkbox';


interface Props {
    readonly label:string;
}

export const CheckBox = ({label}:Props) => {
    return <Checkbox label={label}/>
}