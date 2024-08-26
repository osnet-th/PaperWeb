
import Input from "@mui/joy/Input";




interface Props {
    readonly type:string;
    readonly placeholder?:string;
    readonly text:string;
    readonly onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void;
    readonly readOnly:boolean;
}


export const TextInput = ({type, placeholder, text, readOnly, onChange}:Props) => {
    return <Input value={text} type={type} onChange={onChange} readOnly={readOnly}/>
}