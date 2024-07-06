import {Grid, Paper} from "@mui/material";
import {LoginInput} from "../../Organisms/LoginInput/LoginInput";
import {Box, CssBaseline} from "@mui/joy";


export const LoginTemplate = () => {
    return <div>
        <Grid container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <CssBaseline />
            <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square>
                <Box
                >
                    <LoginInput/>
                </Box>
            </Grid>
        </Grid>
    </div>
}