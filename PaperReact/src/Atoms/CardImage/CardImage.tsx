import {CardMedia} from "@mui/material";


interface Props {
    readonly img: string;
}

export const CardImage = ({img}: Props) => {
    return (
        <>
            <CardMedia
                component="img"
                alt="project"
                height="500"
                image={img}
            />
        </>
    );
}