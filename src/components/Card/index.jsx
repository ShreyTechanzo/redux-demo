import { IconButton, Stack, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";
import { useContactCard } from "./vm";

function Card({ name, mobileNumber, eMail, isFav, id }) {

    const { edit, confirm, handleOpenEdit, handleOpenDelete, handleCloseEdit, handleCloseDelete, toggleFavContact } = useContactCard({ id });

    return (
        <Stack p={1} borderRadius="10px" color="#999" bgcolor="#444" direction="row" justifyContent="space-between">
            <Stack p={1} pl={2} gap={0.5}>
                <Typography variant="h5" component="p"><Typography color="peru" variant="h5" component="span">Name:</Typography> {name}</Typography>
                <Typography variant="h5" component="p"><Typography color="peru" variant="h5" component="span">Mobile:</Typography> {mobileNumber}</Typography>
                <Typography variant="h5" component="p"><Typography color="peru" variant="h5" component="span">E-Mail:</Typography> {eMail ? eMail : " E-mail not provided"}</Typography>
            </Stack>
            <Stack gap={0.5}>
                <IconButton onClick={toggleFavContact} color="primary" size="medium">
                    {isFav ? <StarIcon fontSize="inherit" /> : <StarBorderIcon fontSize="inherit" />}
                </IconButton>
                <IconButton onClick={handleOpenEdit} color="success" size="medium">
                    <EditIcon fontSize="inherit" />
                </IconButton>
                <IconButton onClick={handleOpenDelete} color="error" size="medium">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Stack>
            <EditContact open={edit} onClose={handleCloseEdit} id={id} />
            <DeleteContact open={confirm} onClose={handleCloseDelete} id={id} />
        </Stack>
    );
}

export default Card;