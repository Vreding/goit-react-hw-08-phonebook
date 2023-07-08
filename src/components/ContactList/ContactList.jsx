import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/contacts/selectors";
import ContactItem from "components/ContactItem";

import { Contacts } from "./ContactList.styled";

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
 
  return (
    <Contacts>
      {visibleContacts.map(({ id, name, number }, index) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          index={index}
        />
      ))}
    </Contacts>
  );
};

export default ContactList;