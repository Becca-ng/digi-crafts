import { useState } from "react";
// import '../App.css';

const ContactForm = ({ action }) => {

  const [contact, setContact] = useState({});

  const handleChange = e => {
    const key = e.target.dataset.keyname;
    const value = e.target.value;
    const updatedContact = {...contact};
    updatedContact[key] = value;
    setContact(updatedContact);
  };

   const handleSubmit = e => {
    e.preventDefault();
    action(contact);
    setContact({});
  }


  return (
    <form onSubmit={handleSubmit} className='form'>

      <h1>Submit your Contact Info!</h1>

      <label>
        <span>Full name: </span>
        <input onChange={handleChange} data-keyname='name' value={contact.name || ''} />
      </label><br />

      <label>
        <span>Address: </span>
        <input onChange={handleChange} data-keyname='address' value={contact.address || ''} />
      </label><br />

      <label>
        <span>City: </span>
        <input onChange={handleChange} data-keyname='city' value={contact.city || ''} />
      </label><br />

      <label>
        <span>State: </span>
        <input onChange={handleChange} data-keyname='state' value={contact.state || ''} />
      </label><br />

      <label>
        <span>Zip Code: </span>
        <input onChange={handleChange} data-keyname='zipcode' value={contact.zipcode || ''} />
      </label><br />

      <label>
        <span>Telephone: </span>
        <input onChange={handleChange} data-keyname='phone' value={contact.phone || ''} />
      </label><br />

      <label>
        <span>Email: </span>
        <input onChange={handleChange} data-keyname='email' value={contact.email || ''} />
      </label><br />

      <button type="submit">Submit</button>

    </form>
  );
};

export default ContactForm;