import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Field, Form, Icon, Label, Error } from './ContactForm.styled';
import { firstLetterCaps } from 'utilities';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const isDuplicateName = contacts.find(contact => {
      if (contact.name.toLowerCase() === name.toLowerCase()) return true;
      return false;
    });

    const isDuplicateNumber = contacts.find(contact => {
      if (contact.number === number) return true;
      return false;
    });

    if (isDuplicateNumber || isDuplicateName) {
      <>
        {isDuplicateName &&
          Notify.failure(`${firstLetterCaps(name)} is already in contacts`)}
        ;
        {isDuplicateNumber &&
          Notify.failure(
            `Phone number ${number} is already in your phone book`
          )}
        ;
      </>;
      resetForm();
      return;
    }

    dispatch(addContact({ name, number }))
      .then(() => {
        Notify.success(
          `${firstLetterCaps(name)} successfully added to contact list`
        );
        resetForm();
      })
      .catch(error => {
        console.error('Error adding contact:', error);
        Notify.failure('Failed to add contact. Please try again later.');
      });
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    number: Yup.string().required('Phone number is required'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Label>
            Name
            <Field
              type="text"
              name="name"
              placeholder="Please enter a name"
              className={errors.name && touched.name ? 'error' : ''}
            />
            {errors.name && touched.name ? <Error>{errors.name}</Error> : null}
          </Label>

          <Label>
            Phone number
            <Field
              type="tel"
              name="number"
              placeholder="Please enter a phone number"
              className={errors.number && touched.number ? 'error' : ''}
            />
            {errors.number && touched.number ? (
              <Error>{errors.number}</Error>
            ) : null}
          </Label>

          <Button type="submit">
            Add new contact
            <Icon />
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
