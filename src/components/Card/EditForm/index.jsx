import { Button, Dialog, Stack, TextField } from "@mui/material";
import { useForm } from "./vm";

function EditForm({ open, closeForm, contactDetails }) {
    const { formState, error, handleChange, handleSubmit, handleClose } = useForm(contactDetails, closeForm)

    return (
        <Dialog open={open}>
            <Stack onSubmit={handleSubmit} component="form" gap={2} p={2}>
                <TextField id="name" onChange={handleChange} value={formState.name} error={error.name} label="Name" />
                <TextField id="mobileNumber" onChange={handleChange} value={formState.mobileNumber} error={error.mobileNumber} label="Mobile Number" />
                <TextField id="eMail" onChange={handleChange} value={formState.eMail} error={error.eMail} label="E-Mail" />
                <Stack direction="row" gap={2} justifyContent="flex-end">
                    <Button onClick={handleClose} variant="outlined" color="error">Cancel</Button>
                    <Button type="submit" variant="outlined" color="success">Save</Button>
                </Stack>
            </Stack>
        </Dialog>
    );
}

export default EditForm;