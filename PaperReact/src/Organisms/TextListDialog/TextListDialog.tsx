import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {Fragment, useEffect, useState} from "react";
import axios from "axios";


type Item = {
    tag:string,
    content:string;
}

interface Props {
    readonly open:boolean;
    readonly handleClose: () => void;
}



type Content = {
    tag : string;
    content : FormDataEntryValue;
}

export const TextListDialog = ({open, handleClose}:Props) => {
    const [items , setItems] = useState(Array<Item>());

    useEffect(() => {
        if(items.length === 0) {
            axios({
                url: 'http://localhost:8080/get/about-me',
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                },
                // data: JSON.stringify(contents),
            })
                .then((result) => {
                    setItems(result.data.contents);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    });

    return <Fragment>
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    let contents : Array<Content> = new Array<Content>();

                    formData.forEach((value, key: string) => {
                        contents.push({tag: key, content: value});
                    });
                    axios({
                        url:'http://localhost:8080/upload/about-me/contents',
                        method:'post',
                        headers: {
                            "Content-Type": "application/json",
                        },
                        data: JSON.stringify(contents),
                    })
                        .then((result)=>{
                            window.location.reload();
                        })
                        .catch((error)=>{console.log('요청실패')
                            console.log(error)
                        })

                    handleClose();
                },
            }}
        >
            <DialogTitle>ABOUT ME</DialogTitle>
            <DialogContent>
                {
                    items.map((item, index) => {
                        return <TextField
                            key={index}
                            required
                            margin="dense"
                            name={item.tag}
                            label={item.tag}
                            type="text"
                            fullWidth
                            value={item.content}
                            onChange={(e) => {
                                item.content = e.target.value;
                                setItems([...items]);
                            }}
                        />
                    })
                }

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>취소</Button>
                <Button type="submit">수정</Button>
            </DialogActions>
        </Dialog>
    </Fragment>;
}