import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/operations";
import { updateFilter } from "redux/filter/filterSlice";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Modal from "components/Modal";
import ContactEditor from "components/ContactEditor";
import { firstLetterCaps } from "utilities";

import { Button, Contact, IconDelete, IconEdit, Text } from "./ContactItem.styled";

const ContactItem = ({ id, name, number, index }) => {  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    dispatch(updateFilter(""));
    Notify.info(`${firstLetterCaps(name)} successfully removed from contacts`);
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Contact key={id}>
      <Button className="buttonEdit" type="button" onClick={toggleModal}>
        <IconEdit edit="true" />
      </Button>
      <Button type="button" onClick={handleDelete}>
        <IconDelete />
      </Button>
      <Text><span>{name}:</span>{number}</Text>
      {isModalOpen && (        
        <Modal onClose={toggleModal}>
          <h1>Contact editor</h1>
          <ContactEditor index={index} />
        </Modal>
      )}
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ContactItem;