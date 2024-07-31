import {IconButton, ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React from "react";
import styled from "@emotion/styled";



interface Props {
    readonly imgList:Array<string>;
    readonly onClick?: () => void ;
}



const Container = styled.div`
    display: flex;
    padding: 15px;
    
`
export const ImageListIndex = ({imgList, onClick}:Props) => {
    console.log(imgList);

    return <Container>
        <ImageList sx={{ overflowX: 'scroll', display: 'flex',}} >
            {imgList.map((img) => (
                <ImageListItem key={img}>
                    <img
                        srcSet={`${img}`}
                        src={`${img}`}
                        alt=""
                        style={{
                            width: '300px',
                            height: '400px',
                        }}
                    />
                    <ImageListItemBar
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                onClick={onClick}
                            >
                                <DeleteForeverIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    </Container>

}