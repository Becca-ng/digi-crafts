const Contact = ({name,address,state,zip,phoneNum,email}) => {
    return(
        <li>
        <h2> {name} </h2>
        <p> Address: {address}, {state} {zip}</p>
        <p> Phone Number: {phoneNum}</p>
        <p>Email: {email} </p>
        </li>
    )
}

export default Contact;