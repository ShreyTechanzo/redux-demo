import { Button, Dialog, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../feature";

const formFormat = {
    firstName: "",
    lastName: "",
    mobileNumber: "",
    eMail: "",
};

function Modal({ dialogState, handleDialogState }) {
    const dispatch = useDispatch();

    const [formValue, setFormvalue] = useState(formFormat);

    function handleSubmission(e) {
        e.preventDefault();
        dispatch(addContact({ id: Date.now(), name: `${formValue.firstName} ${formValue.lastName}`, mobileNumber: formValue.mobileNumber, eMail: formValue.eMail, isFav: false }));
        setFormvalue(formFormat);
        handleDialogState(false);
    }

    function handleChange(e) {
        setFormvalue((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    }

    return (
        <Dialog open={dialogState} onClose={() => handleDialogState(false)}>
            <Stack p={3} gap={3} component="form" onSubmit={handleSubmission}>
                <Stack direction="row" gap={3}>
                    <TextField id="firstName" onChange={handleChange} value={formValue.firstName} label="FirstName" variant="outlined" />
                    <TextField id="lastName" onChange={handleChange} value={formValue.lastName} label="LastName" variant="outlined" />
                </Stack>
                <TextField type="number" id="mobileNumber" onChange={handleChange} value={formValue.mobileNumber} label="Mobile Number" variant="outlined" />
                <TextField type="email" id="eMail" onChange={handleChange} value={formValue.eMail} label="E-mail" variant="outlined" />
                <Stack direction="row" justifyContent="flex-end" gap={3}>
                    <Button onClick={() => handleDialogState(false)} variant="outlined" size="large" color="error">Cancel</Button>
                    <Button type="submit" variant="outlined" size="large" color="success">Save</Button>
                </Stack>
            </Stack>
        </Dialog>
    );
}

export default Modal;