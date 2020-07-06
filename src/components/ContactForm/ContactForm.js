import React from "react";
import { connect } from "react-redux";
import { onChange, onSave, clearFields } from "../../store/actions";

function ContactForm({ item, onChange, onSave, clearFields }) {
  function handleChange(e) {
    const changes = {
      ...item,
      [e.target.name]: e.target.value,
    };

    onChange(changes);
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        value={item.name}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="surname"
        value={item.surname}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name="phone"
        value={item.phone}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={() => onSave(item)}>
        {item.id ? "Save" : "Add New Contact"}
      </button>
      <button onClick={() => clearFields()}>Cancel</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    item: state.newItem,
  };
};

const mapDispatchToProps = {
  onChange,
  onSave,
  clearFields,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
