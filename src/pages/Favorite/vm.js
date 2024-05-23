import { useFavContacts } from "../../store/contact/selector";

export function useFilteredFavContact() {
    const favContactList = useFavContacts();
    return { favContactList };
}