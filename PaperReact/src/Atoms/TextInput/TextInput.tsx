
import Input from "@mui/joy/Input";




interface Props {
    readonly type:string;
    readonly placeholder?:string;
}

export const TextInput = ({type, placeholder}:Props) => {
    return <Input type={type}/>
}