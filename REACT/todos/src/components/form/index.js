import React, { useState, useEffect } from 'react';



const formText = { fullName: '', phone_number: ''}
 function Form({ addContact, contacts}) {

    const [form, setForm] = useState(formText)
    
    useEffect(() => {
        setForm(formText);
    }, [contacts]);

    const onChangeClick = (e) => setForm({...form, [e.target.name]: [e.target.value]})

    const onSubmitClick = (e) => {
        e.preventDefault();
        if(form.fullName === "" || form.phone_number === "") {
            return false;
        }
        addContact([...contacts, form])
        console.log(addContact)
    }

     return (<form onSubmit={onSubmitClick}>
    <div className='form-task'>
        <div>
            <input name="fullName" placeholder="Contact Name" onChange={onChangeClick} className="form-input"/>
        </div>
        <div>
            <input name="phone_number" placeholder="Contact Number" onChange={onChangeClick} className="form-input"/>
        </div>
        <div className='btn'>
            <button >Add</button>
        </div>
    </div>
     </form>);
 }
 
 export default Form;
