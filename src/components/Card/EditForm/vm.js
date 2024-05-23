import { useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../../../store";

const errorState = {
    name: false,
    mobileNumber: false,
    eMail: false,
}

export function useForm(contactDetails, closeForm) {
    const [formState, setFormState] = useState(contactDetails);
    const [error, setError] = useState(errorState);
    const dispatch = useDispatch();

    function handleChange(e) {
        setFormState((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
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

        closeForm(false);
    }

    function handleClose() {
        closeForm(false);
    }

    return { formState, error, handleChange, handleSubmit, handleClose };
}