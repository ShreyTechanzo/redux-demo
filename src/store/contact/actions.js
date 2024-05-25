import { ADD_CONTACT, EDIT_CONTACT, FAV_CONTACT, INIT_CONTACT, REMOVE_CONTACT } from "./types"

export const initContacts = (contacts) => {
    return {
        type: INIT_CONTACT,
        payload: contacts
    }
}

export const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact
    }
}

export const favContact = (contactId) => {
    return {
        type: FAV_CONTACT,
        payload: contactId,
    }
}

export const editContact = (contact) => {
    return {
        type: EDIT_CONTACT,
        payload: contact,
    }
}

export const removeContact = (contactId) => {
    return {
        type: REMOVE_CONTACT,
        payload: contactId
    }
}

