import Link from '@mui/joy/Link';


interface Props {
    readonly text:string;
}

export const TextLink = ({text}:Props) => {
    return <Link>{text}</Link>
}