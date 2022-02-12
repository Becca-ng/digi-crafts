import ContactForm from '../components/form.jsx'
import Main from '../sectioning/main.jsx'
import '../App.css';

const Contact = ({ contact }) => {
    const {name, address, city, state, zipcode, phone, email, job} = contact;
  
    return (
      <li className = 'split display'>
        <h2>{name}</h2>
        <p>{address}</p>
        <p>{city}, {state}</p>
        <p>{zipcode}</p>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{job}</p>
      </li>
    );
  }
  
  export default Contact;