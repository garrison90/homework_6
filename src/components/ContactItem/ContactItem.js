import React from "react";
import "./ContactItem.css";

function ContactItem({ item, onDelete, selectContact }) {
  return (
    <li className="list-item">
      <span className="item-name">{item.name}</span>
      <span className="item-surname">{item.surname}</span>
      <span className="item-phone">{item.phone}</span>
      <button onClick={() => selectContact(item.id)}>&#9998;</button>
      <button onClick={() => onDelete(item.id)}>&#10006;</button>
    </li>
  );
}

export default ContactItem;
