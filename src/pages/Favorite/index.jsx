import { Stack, Typography } from "@mui/material";
import { Root } from "./styles";
import Card from "../../components/Card";
import { useSelector } from "react-redux";

function Favorite() {
    const contactList = useSelector(state => state.contact.contacts);
    const favContactList = contactList.filter(contact => contact.isFav);

    return (
        <Root flex={1}>
            <Typography my={2} variant="h3" textAlign="center" color="whitesmoke">Favorite</Typography>
            <Stack px={10} gap={5}>
                {!favContactList.length && <Typography mt={10} variant="h2" textAlign="center" color="GrayText">
                    No <Typography color="orangered" component="span" variant="h2">Favourite</Typography> Contacts
                </Typography>}
                {favContactList.map((props) => (
                    <Card key={props.id} {...props} />
                ))}
            </Stack>
        </Root>
    );
}

export default Favorite;