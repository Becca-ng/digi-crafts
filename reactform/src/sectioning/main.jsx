import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ContactForm from '../components/form.jsx';
import Contact from '../components/DisplayContact.jsx';
import { mockResponse } from '../utils/mockResponse.js';
import Modal from '../components/modal.jsx';
import ContactSummary from "../components/contactSummary.jsx";
import '../App.css';

const Main = () => {
  // const response = mockResponse();

  const [fields, setFields] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    setFields(mockResponse());
  },[]);


  const handleSubmit = contactFields => {
    const updatedContacts = [...fields, contactFields];
    setFields(updatedContacts);
    setIsShowModal(true);
  };

 // const toggleModal = () => {
  //   setIsShowModal(!isShowModal);
  // }

  const handleIsShowModal = () => {
    setIsShowModal(!isShowModal);
  }

  // const contacts = fields.map((contact, index) => {
  //   return <Contact contact={contact} key={index} />
  // });

   return(
    <>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Contact App</h1>} />
        <Route path="add" element={<ContactForm action={handleSubmit} />} />
        <Route path="list" element={<ContactSummary fields = {fields}/> } />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      {isShowModal && <Modal action={handleIsShowModal} message="Contact added" />}
    </>
  )
}


export default Main;