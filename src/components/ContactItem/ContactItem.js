import React from "react";
import "./ContactItem.css";

function ContactItem({ item, onDelete, selectContact }) {
  return (
    <div className="item-container">
      <li className="list-item">
        <span className="item-name">{item.name}</span>
        <span className="item-surname">{item.surname}</span>
        <span className="item-phone">{item.phone}</span>
        <button onClick={() => selectContact(item.id)}>edit</button>
        <button onClick={() => onDelete(item.id)}>delete</button>
      </li>
    </div>
  );
}

export default ContactItem;
