import { Stack, Typography } from "@mui/material";
import { Root } from "./styles";
import Card from "../../components/Card";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initContacts } from "../../store";
import { v4 as uuid } from "uuid";

const contacts = [{ id: uuid(), name: "Shrey Vadaliya", eMail: "shray@mail.com", mobileNumber: "8160010763", isFav: true }];

function Home() {
    const [localStore] = useLocalStorage('contacts', contacts);
    const contactList = useSelector(state => state.contact.contacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initContacts(localStore));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Root flex={1}>
            <Typography my={2} variant="h3" textAlign="center" color="whitesmoke">All</Typography>
            <Stack px={10} gap={5}>
                {!contactList.length && <Typography mt={10} variant="h2" textAlign="center" color="GrayText">No Contacts</Typography>}
                {contactList.map((props) => (
                    <Card key={props.id} {...props} />
                ))}
            </Stack>
        </Root>
    );
}

export default Home;