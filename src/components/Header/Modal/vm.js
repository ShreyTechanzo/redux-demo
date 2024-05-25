import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addContact } from "../../../store";

const formFormat = {
    firstName: {
        value: "",
        error: false
    },
    lastName: {
        value: "",
        error: false
    },
    mobileNumber: {
        value: "",
        error: false
    },
    eMail: {
        value: "",
        error: false
    },
};

export function useForm(handleDialogClose) {
    const dispatch = useDispatch();

    const [formValue, setFormvalue] = useState(formFormat);

    function handleSubmit(e) {
        e.preventDefault();

        let isError = false;

        for (let key in formValue) {
            if (formValue[key].value || key === 'eMail') continue;

            setFormvalue((prev) => ({
                ...prev,
                [key]: {
                    ...prev[key],
                    error: true,
                },
            }));

            isError = true;
        }

        if (isError) return;

        const newContact = {
            id: uuid(),
            name: `${formValue.firstName.value} ${formValue.lastName.value}`,
            mobileNumber: formValue.mobileNumber.value,
            eMail: formValue.eMail.value,
            isFav: false
        };

        dispatch(addContact(newContact));

        setFormvalue(formFormat);

        handleDialogClose(false);
    }

    function handleFirstNameChange(e) {
        setFormvalue((prev) => ({
            ...prev,
            "firstName": {
                ...prev["firstName"],
                value: e.target.value
            },
        }));
    }

    function handleLastNameChange(e) {
        setFormvalue((prev) => ({
            ...prev,
            "lastName": {
                ...prev["lastName"],
                value: e.target.value
            },
        }));
    }

    function handleMobileNumberChange(e) {
        setFormvalue((prev) => ({
            ...prev,
            "mobileNumber": {
                ...prev["mobileNumber"],
                value: e.target.value
            },
        }));
    }

    function handleEMailChange(e) {
        setFormvalue((prev) => ({
            ...prev,
            "eMail": {
                ...prev["eMail"],
                value: e.target.value
            },
        }));
    }

    function handleClose() {
        handleDialogClose();
    }

    return { formValue, handleFirstNameChange, handleLastNameChange, handleMobileNumberChange, handleEMailChange, handleSubmit, handleClose };
}