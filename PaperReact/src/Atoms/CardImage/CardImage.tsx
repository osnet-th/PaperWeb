import {CardMedia} from "@mui/material";


interface Props {
    readonly height?: string;
    readonly width?: string;
    readonly img: string;
}

export const CardImage = ({img, height="500", width="1000" }: Props) => {
    return (
        <>
            <CardMedia
                component="img"
                alt="project"
                height={height}
                width={width}
                image={img}
            />
        </>
    );
}