import { Button, Stack, Typography } from "@mui/material";
import { Link } from "./styles";
import Modal from "./Modal";
import { useState } from "react";


function Header() {
    const [dialogOpen, setDialogOpen] = useState(false);

    function handleDialogOpen(bool) {
        setDialogOpen(bool);
    }

    return (
        <Stack bgcolor="black" color="blue" direction="row" justifyContent="space-around" alignItems="center">
            <Typography variant="h2" my={2} component="h1">Phone-Book</Typography>
            <Stack direction="row" gap={5} fontSize={24}>
                <Link to="/">Contacts</Link>
                <Link to="/favorite">Favorite</Link>
            </Stack>
            <Button onClick={() => setDialogOpen(true)} size="large" variant="outlined">
                Add Contact
            </Button>
            <Modal dialogState={dialogOpen} handleDialogState={handleDialogOpen} />
        </Stack>
    );
}

export default Header;