import Contact from "./DisplayContact";

const ContactSummary = ({fields}) => {

const contacts = fields.map((contact,index) => {
    return <li  key = {index}> {contact.name}</li>;
});
return(
    <li> {contacts} </li>
)
};

export default ContactSummary;