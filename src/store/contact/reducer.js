import { ADD_CONTACT, EDIT_CONTACT, FAV_CONTACT, INIT_CONTACT, REMOVE_CONTACT } from "./types"

const initialState = {
    contacts: [],
};

export const contactReducer = (state = initialState, action) => {

    switch (action.type) {
        case INIT_CONTACT:
            return {
                ...state,
                contacts: action.payload
            };

        case ADD_CONTACT:
            const isContactThere = state.contacts.find(contact => contact.id === action.payload.id && contact.name === action.payload.name);
            if (isContactThere) return state;

            localStorage.setItem('contacts', JSON.stringify([...state.contacts, action.payload]));

            return {
                ...state,
                // contacts: state.contacts.push(action.payload) //TO Find: Convertng Value to number (2) 
                contacts: [...state.contacts, action.payload],
            }

        case FAV_CONTACT: {
            const updatedContacts = state.contacts.map((contact) => {
                if (contact.id === action.payload) {
                    return {
                        ...contact,
                        isFav: !contact.isFav
                    }
                }
                return contact;
            });

            localStorage.setItem('contacts', JSON.stringify(updatedContacts));

            return {
                ...state,
                contacts: updatedContacts
            }
        }

        case EDIT_CONTACT: {
            const updatedContacts = state.contacts.map((contact) => {
                if (contact.id === action.payload.id) {
                    return {
                        ...contact,
                        name: action.payload.name,
                        eMail: action.payload.eMail,
                        mobileNumber: action.payload.mobileNumber
                    }
                }
                return contact;
            });

            localStorage.setItem('contacts', JSON.stringify(updatedContacts));

            return {
                ...state,
                contacts: updatedContacts
            }
        }

        case REMOVE_CONTACT: {
            const updatedContacts = state.contacts.filter((contact) => contact.id !== action.payload);

            localStorage.setItem('contacts', JSON.stringify(updatedContacts));

            return {
                ...state,
                contacts: updatedContacts
            }
        }

        default:
            return state;
    }

}