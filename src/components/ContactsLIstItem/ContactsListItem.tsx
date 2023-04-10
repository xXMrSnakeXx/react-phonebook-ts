import { FC } from "react";
import { IContactsListItem } from "../../types";
import { Item, Button } from "./ContactsListItem.styled";
import { FaUserCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const ContactsListItem: FC<IContactsListItem> = ({ contact, handleRemove }) => {
  return (
    <>
      <Item>
        <FaUserCircle />
        <span>{contact.name}:</span>
        <span> {contact.number}</span>
        <Button onClick={() => handleRemove(contact.id)}>
          <MdDeleteForever size="22" />
        </Button>
      </Item>
    </>
  );
};

export default ContactsListItem;
