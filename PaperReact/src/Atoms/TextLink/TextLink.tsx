import Link from '@mui/joy/Link';


interface Props {
    readonly text:string;
    readonly path:string;
}

export const TextLink = ({text, path}:Props) => {
    return <Link href={path}>{text}</Link>
}