import { Button, Dialog, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../../../feature";

function EditForm({ open, closeForm, contactDetails }) {

    const [formState, setFormState] = useState(contactDetails);
    const dispatch = useDispatch();

    function handleChange(e) {
        setFormState((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(editContact(formState));
        closeForm(false);
    }

    return (
        <Dialog open={open} >
            <Stack onSubmit={handleSubmit} component="form" gap={2} p={2}>
                <TextField id="name" onChange={handleChange} value={formState.name} label="Name" />
                <TextField id="mobileNumber" onChange={handleChange} value={formState.mobileNumber} label="Mobile Number" />
                <TextField id="eMail" onChange={handleChange} value={formState.eMail} label="E-Mail" />
                <Stack direction="row" gap={2} justifyContent="flex-end">
                    <Button onClick={() => closeForm(false)} variant="outlined" color="error">Cancel</Button>
                    <Button type="submit" variant="outlined" color="success">Save</Button>
                </Stack>
            </Stack>
        </Dialog>
    );
}

export default EditForm;