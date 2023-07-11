import { Item } from "./ContactItem.styled";

const ContactItem = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  return (
    <Item>
      {name} {number}
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </Item>
  );
};

export default ContactItem;
