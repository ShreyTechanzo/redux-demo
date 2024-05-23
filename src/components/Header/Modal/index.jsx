import { Button, Dialog, Stack, TextField } from "@mui/material";
import { useForm } from "./vm";

function Modal({ dialogState, handleDialogState }) {

    const { formValue, handleChange, handleSubmission, handleClose } = useForm(handleDialogState);

    return (
        <Dialog open={dialogState} onClose={handleClose}>
            <Stack p={3} gap={3} component="form" onSubmit={handleSubmission}>
                <Stack direction="row" gap={3}>
                    <TextField id="firstName" onChange={handleChange} value={formValue.firstName.value} error={formValue.firstName.error} helperText={formValue.firstName.error && "Must fill the field"} label="FirstName" variant="outlined" />
                    <TextField id="lastName" onChange={handleChange} value={formValue.lastName.value} error={formValue.lastName.error} helperText={formValue.lastName.error && "Must fill the field"} label="LastName" variant="outlined" />
                </Stack>
                <TextField type="number" id="mobileNumber" onChange={handleChange} value={formValue.mobileNumber.value} error={formValue.mobileNumber.error} helperText={formValue.mobileNumber.error && "Must fill the field"} label="Mobile Number" variant="outlined" />
                <TextField type="email" id="eMail" onChange={handleChange} value={formValue.eMail.value} error={formValue.eMail.error} label="E-mail" variant="outlined" />
                <Stack direction="row" justifyContent="flex-end" gap={3}>
                    <Button onClick={handleClose} variant="outlined" size="large" color="error">Cancel</Button>
                    <Button type="submit" variant="outlined" size="large" color="success">Save</Button>
                </Stack>
            </Stack>
        </Dialog>
    );
}

export default Modal;