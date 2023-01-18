import React, { useState } from 'react';


 function List({ contacts}) {
    const [filterText, setFilterText] = useState("")

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
           item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase()) 
        })
    })

     return (<>
     <div className='list-div'>
         <div ><input placeholder='Contact Filter' value={filterText} onChange={(e) => setFilterText(e.target.value)} className="list-input"/></div>
         <div className='list-li'><ul className='list-type' >
             {contacts.map((item, i) => <li key={i} >{item.fullName}</li>)}
         </ul></div>
     </div>
     </>);
 }
 
 export default List;