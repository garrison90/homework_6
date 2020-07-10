import {
  SET_ITEMS,
  DELETE_ITEM,
  ADD_CONTACT,
  SELECTED_CONTACT,
  CHANGE_CONTACT_FORM,
  UPDATE_CONTACT,
  CLOSE_FORM,
  OPEN_FORM,
  CHECK_INPUT,
} from "../actions/contactsActions";

const initialState = {
  items: [],
  newItem: {
    name: "",
    surname: "",
    phone: "",
  },
  showForm: false,
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

export function isButtonDisabled(obj) {
  return !Object.values(obj).every((item) => item === false);
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
        showForm: false,
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
        showForm: true,
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
        showForm: false,
      };
    case CLOSE_FORM:
      return {
        ...state,
        showForm: false,
      };
    case OPEN_FORM:
      return {
        ...state,
        showForm: true,
        isValid: setIsValid(),
        newItem: setEmptyNewItem(),
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
