
import Input from "@mui/joy/Input";




interface Props {
    readonly type:string;
    readonly placeholder?:string;
    readonly onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void;
}


export const TextInput = ({type, placeholder, onChange}:Props) => {
    return <Input type={type} onChange={onChange}/>
}