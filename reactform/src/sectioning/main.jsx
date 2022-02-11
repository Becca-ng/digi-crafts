import { useState } from "react";
import ContactForm from '../components/form.jsx'
import Contact from '../components/DisplayContact.jsx'
import { mockResponse } from '../utils/mockResponse.js'
import '../App.css';


const Main = () => {
    const response = mockResponse();
  
    const [fields, setFields] = useState([]);
  
    const handleSubmit = (e, contactFields) => {
      e.preventDefault();
      const updatedContacts = [...fields, contactFields]
      setFields(updatedContacts);
      console.log(contactFields);
    }
  
    const newContacts = fields.map((contact, index) => {
      return <Contact contact={contact} key={index} />
    });
  
  
    const contacts = response.map((contact, index) => {
      return <Contact contact={contact} key={index} />
    });
  
    return (
      <>
        <ContactForm action={handleSubmit} />
        <ul>{newContacts}</ul>
        <ul>{contacts}</ul>
    
      </>
    )
  }
  
  export default Main;