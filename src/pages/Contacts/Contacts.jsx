import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations";
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
  selectContacts
} from "redux/contacts/selectors";

import ContactList from "components/ContactList";
import Filter from "components/Filter";
import Message from "components/Message";
import Loader from "components/Loader";
import Contacts from "components/Contacts";
import ContactForm from "components/ContactForm";
import PhoneBook from "components/PhoneBoock";
import ContactsCounter from "components/ContactsCounter";


export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError); 
  const countVisibleContacts = useSelector(selectVisibleContacts).length;
  const countContacts = useSelector(selectContacts).length;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhoneBook>
      <ContactForm />
      <Contacts>
        {isLoading && <Loader text={'Loading contacts...'} />}
        {error && <Message message={error} />}
        {!isLoading && countContacts > 1 && <Filter />}
        {!isLoading && countContacts > 0 &&
          <>
            <ContactsCounter
              visibleContacts={countVisibleContacts}
              tatalContacts={countContacts}
            />
            <ContactList />
          </>
        }
        {!isLoading && countContacts === 0 &&
          <Message message="There are no contacts in your phone book" />
        }
      </Contacts>
    </PhoneBook>
  );
};