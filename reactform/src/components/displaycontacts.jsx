import ContactForm from './form.jsx'
import Main from '../sectioning/main.jsx'
import '../App.css';

const ContactDetail = ({ action, selectedContact }) => {
    const {name, address, city, state, zipcode, phone, email, job,id} = selectedContact;
  
    return (
      <li>
        <p><h1> Contact Details </h1> </p>
        <h2>{name}</h2>
        <p>{address}</p>
        <p>{city}, {state}</p>
        <p>{zipcode}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{job}</p>
        <button className = 'button' onClick = {() => action(id)}> Delete Contact</button>
      </li>
    );
  }
  
  export default ContactDetail;