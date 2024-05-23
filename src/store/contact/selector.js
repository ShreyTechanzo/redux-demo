import { useSelector } from "react-redux";

export function useContacts() {
    const contactList = useSelector(state => state.contact.contacts);
    return contactList;
}

export function useFavContacts() {
    const contactList = useSelector(state => state.contact.contacts);
    return contactList.filter(contact => contact.isFav);
}

export function useSelectedContact(id) {
    const contactList = useSelector(state => state.contact.contacts);
    return contactList.find(contact => contact.id === id);
}