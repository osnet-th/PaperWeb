import {TextField} from "@mui/material";
import Box from "@mui/material/Box";


export const MultilineInput = () => {
    return <Box
        sx={{
            width: '100%',
            maxWidth: '100%',
            height: '50%'
        }}
    >
        <TextField fullWidth id="fullWidth" />
    </Box>;
}
