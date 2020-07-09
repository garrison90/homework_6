import {
  SET_ITEMS,
  DELETE_ITEM,
  ADD_CONTACT,
  SELECTED_CONTACT,
  CHANGE_CONTACT_FORM,
  UPDATE_CONTACT,
  CLEAR_FIELDS,
  CHECK_INPUT,
} from "../actions/contactsActions";

const initialState = {
  items: [],
  newItem: {
    name: "",
    surname: "",
    phone: "",
  },
  isValid: {
    name: null,
    surname: null,
    phone: null,
  },
  disabledButton: true,
};

function setIsValid() {
  return {
    name: null,
    surname: null,
    phone: null,
  };
}

function setEmptyNewItem() {
  return {
    name: "",
    surname: "",
    phone: "",
  };
}

function createContact(items, contact) {
  return [...items, contact];
}

function updateContact(items, contact) {
  return items.map((item) => (item.id === contact.id ? contact : item));
}

function isButtonDisabled(obj) {
  return !Object.values(obj).every((item) => item === false || item === "");
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_ITEMS:
      return {
        ...state,
        items: payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload),
      };
    case ADD_CONTACT:
      return {
        ...state,
        items: createContact(state.items, payload),
        newItem: setEmptyNewItem(),
        isValid: setIsValid(),
        disabledButton: isButtonDisabled(payload),
      };
    case SELECTED_CONTACT:
      return {
        ...state,
        newItem: {
          ...state.newItem,
          ...state.items.find((item) => item.id === payload),
        },
        isValid: { ...!state.isValid },
        disabledButton: false,
      };
    case CHANGE_CONTACT_FORM:
      return {
        ...state,
        newItem: {
          ...state.newItem,
          ...payload,
        },
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        items: updateContact(state.items, payload),
        newItem: setEmptyNewItem(),
        isValid: setIsValid(),
        disabledButton: true,
      };
    case CLEAR_FIELDS:
      return {
        ...state,
        newItem: setEmptyNewItem(),
        isValid: setIsValid(),
        disabledButton: true,
      };
    case CHECK_INPUT:
      return {
        ...state,
        isValid: { ...payload },
        disabledButton: isButtonDisabled(payload),
      };
    default:
      return state;
  }
}
