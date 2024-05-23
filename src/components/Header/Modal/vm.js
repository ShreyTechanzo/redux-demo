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

export function useForm(handleDialogState) {
    const dispatch = useDispatch();

    const [formValue, setFormvalue] = useState(formFormat);

    function handleSubmission(e) {
        e.preventDefault();

        //It's Actually not good logic Bcoz its not scalable
        let isError = false;

        for (let key in formValue) {
            if (formValue[key].value) continue;

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

        dispatch(addContact({ id: uuid(), name: `${formValue.firstName.value} ${formValue.lastName.value}`, mobileNumber: formValue.mobileNumber.value, eMail: formValue.eMail.value, isFav: false }));

        setFormvalue(formFormat);

        handleDialogState(false);
    }

    function handleChange(e) {
        setFormvalue((prev) => ({
            ...prev,
            [e.target.id]: {
                ...prev[e.target.id],
                value: e.target.value
            },
        }));
        console.log(e.target.id);
    }

    function handleClose() {
        handleDialogState(false);
    }

    return { formValue, handleChange, handleSubmission, handleClose };
}