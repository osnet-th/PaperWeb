import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {Fragment, useState} from "react";
import axios from "axios";
import {axiosInstance} from "../../Axios/instance";



interface Props {
    readonly open: boolean;
    readonly handleClose: () => void;
}


type ImgaeUpload = {
    name: string;
    file: string;
}


export const ImageInputDialog = ({open, handleClose}: Props) => {
    return <Fragment>
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const obj = Object.fromEntries(formData.entries());

                    const data = new FormData();
                    data.append("image", obj.img);

                    axiosInstance({
                        url: '/upload/about-me/image',
                        method: 'post',
                        withCredentials: true,
                        data: data,
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                        // data: JSON.stringify(contents),
                    })
                        .then((result) => {
                            console.log("요청 성공")
                        })
                        .catch((error) => {
                            console.log('요청실패')
                            console.log(error)
                        })

                    handleClose();
                },
            }}
        >
            <DialogTitle>ABOUT ME</DialogTitle>
            <DialogContent>
                <TextField type="file" name="img"/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>취소</Button>
                <Button type="submit">수정</Button>
            </DialogActions>
        </Dialog>
    </Fragment>;
}