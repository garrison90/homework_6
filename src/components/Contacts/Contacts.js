import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import { connect } from "react-redux";
import {
  onDelete,
  selectContact,
  openForm,
} from "../../store/actions/contactsActions";
import ContactForm from "../ContactForm/ContactForm";
import "./Contacts.css";

function Contacts({ items, onDelete, selectContact, showForm, openForm }) {
  return (
    <div className="contacts-container">
      <ul className="contacts-list">
        {items.map((item) => (
          <ContactItem
            key={item.id}
            item={item}
            onDelete={onDelete}
            selectContact={selectContact}
          />
        ))}
      </ul>
      {showForm ? (
        <ContactForm />
      ) : (
        <button className="add-form-btn" onClick={() => openForm()}>
          Add New Contact
        </button>
      )}
    </div>
  );
}

const mapStateToProps = ({ items, showForm }) => {
  return {
    items,
    showForm,
  };
};

const mapDispatchToProps = {
  onDelete,
  selectContact,
  openForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
