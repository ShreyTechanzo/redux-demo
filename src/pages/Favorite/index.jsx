import { Stack, Typography } from "@mui/material";
import Card from "../../components/Card";
import { useFilteredFavContact } from "./vm";

function Favorite() {

    const { favContactList } = useFilteredFavContact();

    return (
        <Stack flex={1} bgcolor="#333">
            <Typography my={2} variant="h3" textAlign="center" color="whitesmoke">Favorite</Typography>
            <Stack px={10} gap={5}>
                {!favContactList.length && <Typography mt={10} variant="h2" textAlign="center" color="GrayText">
                    No <Typography color="orangered" component="span" variant="h2">Favourite</Typography> Contacts
                </Typography>}
                {favContactList.map((props) => (
                    <Card key={props.id} {...props} />
                ))}
            </Stack>
        </Stack>
    );
}

export default Favorite;