import React from "react";
import { connect } from "react-redux";
import {
  onChange,
  onSave,
  clearFields,
} from "../../store/actions/contactsActions";
import "./ContactForm.css";

function ContactForm({
  item,
  onChange,
  onSave,
  clearFields,
  isFormValid,
  isValid,
}) {
  function handleChange(e) {
    const { name, value } = e.target;
    const changes = {
      ...item,
      [name]: value,
    };

    const valid = {
      ...isValid,
      [name]: isValueValid(name, value),
    };
    onChange(changes, valid);
  }

  function isValueValid(name, value) {
    switch (name) {
      case "name":
        return !!value;
      case "surname":
        return !!value;
      case "phone":
        return (
          !!value &&
          value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)
        );
    }
  }

  return (
    <div className="box">
      <h1>Contact Form</h1>
      <input
        className={isValid.name ? "" : "error"}
        type="text"
        name="name"
        placeholder="Name"
        value={item.name}
        onChange={(e) => handleChange(e)}
      />
      <input
        className={isValid.surname ? "" : "error"}
        type="text"
        name="surname"
        placeholder="Surname"
        value={item.surname}
        onChange={(e) => handleChange(e)}
      />
      <input
        className={isValid.phone ? "" : "error"}
        type="text"
        name="phone"
        placeholder="Phone"
        value={item.phone}
        onChange={(e) => handleChange(e)}
      />
      <div className="button-container">
        <input
          type="button"
          onClick={() => onSave(item)}
          disabled={!isFormValid}
          value={item.id ? "Save" : "Add New Contact"}
        />
        <input type="button" onClick={() => clearFields()} value="Cancel" />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    item: state.newItem,
    isFormValid: state.isFormValid,
    isValid: state.isValid,
  };
};

const mapDispatchToProps = {
  onChange,
  onSave,
  clearFields,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
