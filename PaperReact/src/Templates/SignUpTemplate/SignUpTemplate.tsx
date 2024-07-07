import {Grid, Paper} from "@mui/material";
import {Box, CssBaseline} from "@mui/joy";
import {LoginInput} from "../../Organisms/LoginInput/LoginInput";
import {SignUpInput} from "../../Organisms/SignUpInput/SignUpInput";

export const SignUpTemplate = () => {
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
                    <SignUpInput/>
                </Box>
            </Grid>
        </Grid>
    </div>
}