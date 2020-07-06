import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import { connect } from "react-redux";
import { onDelete, selectContact } from "../../store/actions";
import ContactForm from "../ContactForm/ContactForm";

function Contacts({ items, onDelete, selectContact }) {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <ContactItem
            key={item.id}
            item={item}
            onDelete={onDelete}
            selectContact={selectContact}
          />
        ))}
      </ul>
      <ContactForm />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = {
  onDelete,
  selectContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
