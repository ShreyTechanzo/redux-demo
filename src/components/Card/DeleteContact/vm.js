import { useDispatch } from "react-redux";
import { removeContact } from "../../../store";
import { useSelectedContact } from "../../../store/contact/selector";

export function useDeleteContact(id, onClose) {

    const { name } = useSelectedContact(id);
    const dispatch = useDispatch();

    function handleClose() {
        onClose();
    }

    function confirmedDeleteContact() {
        dispatch(removeContact(id));
    }

    return { name, confirmedDeleteContact, handleClose };
}