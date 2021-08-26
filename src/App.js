import axios from "axios"
import React, { useState, useEffect } from "react"
import Contacts from "./components/Contacts"
import Submit from "./components/Submit"

const App = () => {

  const [contacts, setContact] = useState([])

  useEffect(() => {
    getPersons()
  }, [])

  
  const getPersons = () => {
    axios
      .get("http://localhost:5000/api/contacts")
      .then(res => {
        setContact(res.data)
      })
      .catch(error => console.log(error));

  }
    
  const createContact = ({firstName, lastName, address}) => {
  
    const contact = {
      firstName: firstName,
      lastName: lastName,
      address: address
    }
    
    axios.post("http://localhost:5000/api/contacts", contact)
    .then(res => {
      setContact([...contacts])
      console.log(res.data)
      getPersons()
    }).catch(err => {
      console.log(err)
    });
  }

  const deleteContact = (id) => {
    
    axios.delete("http://localhost:5000/api/contacts/" + id)
    .then(res => {
      console.log(res.data)
      getPersons()
    })
    .catch(err => {
      console.log(err)
  }
  )
}

  return (

    <div className="content">
      <h1 className="headline">My Contacts</h1>
      <hr className="hr"></hr>
      <Submit onAdd={createContact}/> 
      <h1>Contacts</h1>
      <Contacts contacts={contacts} onDelete={deleteContact}/>   
    </div>
  )
}

export default App
