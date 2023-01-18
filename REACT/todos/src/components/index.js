import React, { useState } from 'react';
import Form from './form'
import List from './list'

function Contacts() {
    const [contacts, setContacts] = useState([
        { fullName: "Ahmet", phoneNumber: 123123},
        { fullName: "Mehmet", phoneNumber: 456142},
        { fullName: "Fatma", phoneNumber: 789465}])
    return (<>
    <List contacts={contacts}/>
    <br/>
    <Form addContact={setContacts} contacts={contacts}/>
    </>);
}

export default Contacts;