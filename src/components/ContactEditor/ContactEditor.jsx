import PropTypes from "prop-types";
import { Formik } from 'formik';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { firstLetterCaps } from 'utilities';
import { selectContacts, selectVisibleContacts } from "redux/contacts/selectors";
import { updateContact } from "redux/contacts/operations";
import { updateFilter } from "redux/filter/filterSlice";
import { Button, Field, Form, Icon, Label } from './ContactEditor.styled';

const ContactEditor = ({ index }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  /////////////
  const visibleContacts = useSelector(selectVisibleContacts);
  /////////////
  const currentContact = visibleContacts[index]; 
  
  const handleSubmit = ({ name, number }, { resetForm }) => {
    const isDuplicateName = contacts.find(contact => {
      if (currentContact.name.toLowerCase() === name.toLowerCase()) return false;
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    const isDuplicateNumber = contacts.find(contact => {
      if (currentContact.number === number) return false;
      return contact.number === number;
    });
        
    if (isDuplicateNumber || isDuplicateName) {     
      <>
        { isDuplicateName && Notify.failure(`${firstLetterCaps(name)} is already in contacts`) };      
        { isDuplicateNumber && Notify.failure(`${number} is already in contacts`) }; 
      </>
      return;
    };

    dispatch(updateContact({ name, number, id: currentContact.id }));
    dispatch(updateFilter(""));
    Notify.success( `Contact ${firstLetterCaps(currentContact.name)} successfully changed`);    
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: currentContact.name,
        number: currentContact.number,
      }}
      onSubmit={handleSubmit}
    >      
      <Form>
        <Label>
          Edit name
          <Field id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoFocus
            required
          />
        </Label>
        <Label>
          Edit phone number
          <Field
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>        
        <Button type="submit" >
          Change contact
          <Icon />
        </Button>        
      </Form>      
    </Formik>
  );
};

ContactEditor.propTypes = {
  index: PropTypes.number.isRequired,
};

export default ContactEditor;