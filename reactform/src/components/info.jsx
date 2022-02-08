import Form from '../components/form';

const ContactInfo= ({}) => {
    return(
        
        <li className="split right">
<h1>  Contact Information List</h1> 
        <p>Name:</p>
        <p>Email: {} </p>
        <p> Address: {}, {} {}</p>
        <p> Phone Number: {}</p>
        <p>Email: {} </p>
        </li>
    )
}

export default ContactInfo;