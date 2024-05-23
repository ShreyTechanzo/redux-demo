import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useDeleteContact } from "./vm";

function DeleteContact({ open, id, onClose }) {

    const { name, confirmedDeleteContact, handleClose } = useDeleteContact(id, onClose);

    return (
        <Dialog open={open}>
            <DialogTitle>
                Are you sure you want to delete {name}?
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    If you delete this Contact you won't be able to restore it!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant="outlined" color="success">Cancel</Button>
                <Button onClick={confirmedDeleteContact} variant="outlined" color="error">Delete</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DeleteContact;