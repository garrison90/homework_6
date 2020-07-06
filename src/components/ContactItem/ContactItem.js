import React from "react";

function ContactItem({ item, onDelete, selectContact }) {
  return (
    <div>
      <li>
        <span>{item.name}</span>
        <span>{item.surname}</span>
        <span>{item.phone}</span>
        <button onClick={() => selectContact(item.id)}>edit</button>
        <button onClick={() => onDelete(item.id)}>delete</button>
      </li>
    </div>
  );
}

export default ContactItem;
