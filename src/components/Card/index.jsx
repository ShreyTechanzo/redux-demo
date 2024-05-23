import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import { Root } from "./styles";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { favContact, removeContact } from "../../store";
import { useState } from "react";
import EditForm from "./EditForm";

function Card({ name, mobileNumber, eMail, isFav, id }) {

    const dispatch = useDispatch();
    const [confirm, setConfirm] = useState(false);
    const [edit, setEdit] = useState(false);

    function handleCloseEdit(bool) {
        setEdit(bool);
    }

    const contactDetails = {
        name,
        eMail,
        mobileNumber,
        id
    };

    return (
        <Root p={1} direction="row" justifyContent="space-between">
            <Stack p={1} pl={2} gap={0.5}>
                <Typography variant="h5" component="p"><Typography color="peru" variant="h5" component="span">Name:</Typography> {name}</Typography>
                <Typography variant="h5" component="p"><Typography color="peru" variant="h5" component="span">Mobile:</Typography> {mobileNumber}</Typography>
                <Typography variant="h5" component="p"><Typography color="peru" variant="h5" component="span">E-Mail:</Typography> {eMail}</Typography>
            </Stack>
            <Stack gap={0.5}>
                <IconButton onClick={() => dispatch(favContact(id))} color="primary" size="medium">
                    {isFav ? <StarIcon fontSize="inherit" /> : <StarBorderIcon fontSize="inherit" />}
                </IconButton>
                <IconButton onClick={() => handleCloseEdit(true)} color="success" size="medium">
                    <EditIcon fontSize="inherit" />
                </IconButton>
                <IconButton onClick={() => setConfirm(true)} color="error" size="medium">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Stack>
            <EditForm open={edit} closeForm={setEdit} contactDetails={contactDetails} />
            <Dialog open={confirm}>
                <DialogTitle>
                    Are you sure you want to delete {name}?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        If you delete this Contact you won't be able to restore it!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setConfirm(false)} variant="outlined" color="success">Cancel</Button>
                    <Button onClick={() => dispatch(removeContact(id))} variant="outlined" color="error">Delete</Button>
                </DialogActions>
            </Dialog>
        </Root>
    );
}

export default Card;