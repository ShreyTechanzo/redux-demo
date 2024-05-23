import { useState } from "react";
import { useDispatch } from "react-redux";
import { favContact } from "../../store";

export function useContactCard({ id }) {
    const dispatch = useDispatch();
    const [confirm, setConfirm] = useState(false);
    const [edit, setEdit] = useState(false);

    function handleOpenEdit() {
        setEdit(true);
    }

    function toggleFavContact() {
        dispatch(favContact(id));
    }

    function handleOpenDelete() {
        setConfirm(true);
    }

    function handleCloseEdit() {
        setEdit(false);
    }

    function handleCloseDelete() {
        setConfirm(false);
    }

    return { edit, confirm, handleOpenEdit, handleOpenDelete, handleCloseEdit, handleCloseDelete, toggleFavContact };
}