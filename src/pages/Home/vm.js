import { useLocalStorage } from "@uidotdev/usehooks";
import { v4 as uuid } from "uuid";
import { useContacts } from "../../store/contact/selector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { initContacts } from "../../store";

const contacts = [{ id: uuid(), name: "Skie Tsumoro", eMail: "skie@mail.com", mobileNumber: "1234567890", isFav: true }];

export function useHome() {
    const [localStore] = useLocalStorage('contacts', contacts);
    const contactList = useContacts();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initContacts(localStore));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { contactList };
}