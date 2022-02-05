// assignment: populate contactList with name,address,state, zipcode, phone number, and email


import faker from '@faker-js/faker';
import Contact from '../components/contacts';

const Main = () => {


    const contactList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const newContact = contactList.map(() => {
        const newName = faker.name.findName();
        const newAddress = faker.address.streetAddress();
        const newState = faker.address.state();
        const newZip = faker.address.zipCode();
        const newNum = faker.phone.phoneNumber();
        const newEmail = faker.internet.email();
        return <Contact 
        name={newName} 
        address={newAddress}
        state={newState}
        zip ={newZip}
        phoneNum = {newNum}
        email = {newEmail}
        />;
    })

    return (
        <>
            <h1> Contact List </h1>
            <ul>
                {newContact}
            </ul>

        </>
    )
}

export default Main;