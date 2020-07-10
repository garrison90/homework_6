import api from "../../api";

export const SET_ITEMS = "SET_ITEMS";
export function setItems(data) {
  return {
    type: SET_ITEMS,
    payload: data,
  };
}

export function fetchItems() {
  return function (dispatch) {
    api.get().then((resp) => dispatch(setItems(resp.data)));
  };
}

export const DELETE_ITEM = "DELETE_ITEM";
export function onDelete(id) {
  return function (dispatch) {
    api.delete(id).then(() => dispatch({ type: DELETE_ITEM, payload: id }));
  };
}

export const ADD_CONTACT = "ADD_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export function onSave(contact) {
  return function (dispatch) {
    if (contact.id) {
      api.put(contact.id, contact).then((resp) =>
        dispatch({
          type: UPDATE_CONTACT,
          payload: resp.data,
        })
      );
    } else {
      api.post("", contact).then((resp) =>
        dispatch({
          type: ADD_CONTACT,
          payload: resp.data,
        })
      );
    }
  };
}

export const SELECTED_CONTACT = "SELECTED_CONTACT";
export function selectContact(id) {
  return {
    type: SELECTED_CONTACT,
    payload: id,
  };
}

export const CHANGE_CONTACT_FORM = "CHANGE_CONTACT_FORM";
export function onChange(changes) {
  return {
    type: CHANGE_CONTACT_FORM,
    payload: changes,
  };
}

export const CLOSE_FORM = "CLOSE_FORM";
export function closeForm() {
  return {
    type: CLOSE_FORM,
  };
}

export const OPEN_FORM = "OPEN_FORM";
export function openForm() {
  return {
    type: OPEN_FORM,
  };
}

export const CHECK_INPUT = "CHECK_INPUT";
export function checkInputValid(valid) {
  return {
    type: CHECK_INPUT,
    payload: valid,
  };
}
