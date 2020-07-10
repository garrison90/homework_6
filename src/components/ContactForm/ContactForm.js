import React from "react";
import { connect } from "react-redux";
import {
  onChange,
  onSave,
  clearFields,
  checkInputValid,
} from "../../store/actions/contactsActions";
import "./ContactForm.css";

function ContactForm({
  item,
  onChange,
  onSave,
  clearFields,
  disabledButton,
  isValid,
  checkInputValid,
}) {
  function handleChange(e) {
    const { name, value } = e.target;
    const changes = {
      ...item,
      [name]: value,
    };

    onChange(changes);

    validateInput(name, value);
  }

  function validateInput(name, value) {
    const valid = {
      ...isValid,
      [name]: isValueValid(name, value),
    };

    checkInputValid(valid);
  }

  function isValueValid(name, value) {
    switch (name) {
      case "name":
        return !value.match(/^[a-z0-9_-]{1,25}$/gi);
      case "surname":
        return !value.match(/^[a-z0-9_-]{1,25}$/gi);
      case "phone":
        return !value.match(
          /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
        );
    }
  }

  return (
    <div className="box">
      <h1>Contact Form</h1>
      <input
        className={isValid.name ? "error" : ""}
        type="text"
        name="name"
        placeholder="Name"
        value={item.name}
        onChange={(e) => handleChange(e)}
      />
      <input
        className={isValid.surname ? "error" : ""}
        type="text"
        name="surname"
        placeholder="Surname"
        value={item.surname}
        onChange={(e) => handleChange(e)}
      />
      <input
        className={isValid.phone ? "error" : ""}
        type="text"
        name="phone"
        placeholder="Phone"
        value={item.phone}
        onChange={(e) => handleChange(e)}
      />
      <div className="button-container">
        <button
          onClick={() => onSave(item)}
          disabled={disabledButton}
          className="form-button btn-save"
        >
          {item.id ? "Save" : "Add New Contact"}
        </button>
        <button
          className="form-button btn-cancel"
          onClick={() => clearFields()}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    item: state.newItem,
    disabledButton: state.disabledButton,
    isValid: state.isValid,
  };
};

const mapDispatchToProps = {
  onChange,
  onSave,
  clearFields,
  checkInputValid,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
