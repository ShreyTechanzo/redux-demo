import { Stack, Typography } from "@mui/material";
import Card from "../../components/Card";
import { useHome } from "./vm";


function Home() {

    const { contactList } = useHome();

    return (
        <Stack flex={1} bgcolor="#333">
            <Typography my={2} variant="h3" textAlign="center" color="whitesmoke">All</Typography>
            <Stack px={10} gap={5}>
                {!contactList.length && <Typography mt={10} variant="h2" textAlign="center" color="GrayText">No Contacts</Typography>}
                {contactList.map((props) => (
                    <Card key={props.id} {...props} />
                ))}
            </Stack>
        </Stack>
    );
}

export default Home;