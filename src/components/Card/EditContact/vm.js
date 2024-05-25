import { useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../../../store";
import { useSelectedContact } from "../../../store/contact/selector";

const errorState = {
    name: false,
    mobileNumber: false,
    eMail: false,
}

export function useForm(userId, onClose) {
    const { name, id, mobileNumber, eMail } = useSelectedContact(userId);

    const [formState, setFormState] = useState({ name, id, mobileNumber, eMail });
    const [error, setError] = useState(errorState);
    const dispatch = useDispatch();

    function handleNameChange(e) {
        setFormState((prev) => ({
            ...prev,
            "name": e.target.value,
        }));
    }

    function handleMobileNumberChange(e) {
        setFormState((prev) => ({
            ...prev,
            "mobileNumber": e.target.value,
        }));
    }

    function handleEMailChange(e) {
        setFormState((prev) => ({
            ...prev,
            "eMail": e.target.value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        let isError;

        for (let key in formState) {
            if (formState[key]) continue;

            setError((prev) => ({
                ...prev,
                [key]: true,
            }));

            isError = true;
        }

        if (isError) return;

        dispatch(editContact(formState));

        setError(errorState);

        onClose(false);
    }

    function handleClose() {
        onClose();
    }

    return { formState, error, handleNameChange, handleMobileNumberChange, handleEMailChange, handleSubmit, handleClose };
}