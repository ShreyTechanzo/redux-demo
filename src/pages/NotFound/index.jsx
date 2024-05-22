import { Typography } from "@mui/material";
import { Root } from "./styles";

function NotFound() {
    return (
        <Root color="whitesmoke" flex={1} justifyContent="center" alignItems="center" gap={2}>
            <Typography variant="h1">404 Error</Typography>
            <Typography variant="h4">Page Not Found</Typography>
        </Root>
    );
}

export default NotFound;