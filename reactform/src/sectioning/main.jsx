import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContactForm from '../components/form.jsx';
import ContactDetail from '../components/displaycontacts.jsx'
import { mockResponse } from '../utils/mockResponse.js';
import Modal from '../components/modal.jsx';
import ContactSummary from "../components/contactSummary.jsx";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Main = () => {
  const navigate = useNavigate();
    const [fields, setFields] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    setFields(mockResponse());
  }, []);
 
  const handleClick = e => {
    const targetId = e.target.id;
    const selectedContact = fields.filter(field => {
      return field.id === targetId;
    });
    setSelectedContact(selectedContact[0]);
  };

  const handleDelete = id => {
    const updatedContacts  = fields.filter(field => field.id != id);
    setFields(updatedContacts);
    setSelectedContact(null);
    navigate('/list');
  }

  const handleIsShowModal = () => {
    setIsShowModal(!isShowModal);
  }

  const handleSubmit = contactFields => {
    const updatedContacts = [...fields, contactFields];
    setFields(updatedContacts);
    setIsShowModal(true);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Contact App</h1>} />
        <Route path="add" element={<ContactForm action={handleSubmit} />} />
        <Route path="list" element={<ContactSummary action={handleClick} fields={fields} />}>
          {/* this change below removes the error we get if we refresh the page with an ID in the URL - because when we do that, that ID no longer exists */}
          {selectedContact && <Route path=":id" element={<ContactDetail selectedContact={selectedContact} action = {handleDelete} />} />} 
        </Route>
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      {isShowModal && <Modal action={handleIsShowModal} message="Contact added" />}
    </>
  )
}


export default Main;