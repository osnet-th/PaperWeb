import {TextField} from "@mui/material";
import {LabelInput} from "../../Molecules/LabelInput/LabelInput";
import Box from "@mui/material/Box";

export const ProjectWrite = () => {
    return <div>
        <LabelInput label="제목" type="text" />
        <Box
            sx={{
                width: '100%',
                maxWidth: '100%',
            }}
        >
            <TextField fullWidth id="fullWidth" />
        </Box>
    </div>
}