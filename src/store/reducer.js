import {
  SET_ITEMS,
  DELETE_ITEM,
  ADD_CONTACT,
  SELECT_CONTACT,
  CHANGE_CONTACT_FORM,
  UPDATE_CONTACT,
  CLEAR_FIELDS,
} from "./actions";

const initialState = {
  items: [],
  newItem: {
    name: "",
    surname: "",
    phone: "",
  },
};

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

export default function (state = initialState, { type, payload }) {
  console.log("payload", payload);

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
      };
    case SELECT_CONTACT:
      return {
        ...state,
        newItem: {
          ...state.newItem,
          ...state.items.find((item) => item.id === payload),
        },
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
      };
    case CLEAR_FIELDS:
      return {
        ...state,
        newItem: setEmptyNewItem(),
      };
    default:
      return state;
  }
}
