import { Button, Stack, Typography } from "@mui/material";
import { Link } from "./styles";
import Modal from "./Modal";
import { useHeader } from "./vm";


function Header() {

    const { isDialogOpen, handleDialogOpen, handleDialogClose } = useHeader();

    return (
        <Stack gap={2} bgcolor="black" color="blue" direction="row" justifyContent="space-around" alignItems="center">
            <Typography variant="h2" my={2} component="h1">Phone-Book</Typography>
            <Stack direction="row" gap={5} fontSize={24}>
                <Link to="/">Contacts</Link>
                <Link to="/favorite">Favorite</Link>
            </Stack>
            <Button onClick={handleDialogOpen} size="large" variant="outlined">
                Add Contact
            </Button>
            <Modal isDialogOpen={isDialogOpen} handleDialogClose={handleDialogClose} />
        </Stack>
    );
}

export default Header;