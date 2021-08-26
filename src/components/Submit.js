import { useState } from "react"
import Firstname from "./Firstname"
import Lastname from "./Lastname"
import Address from "./Address"
import SubmitButton from "./SubmitButton"

const CreateContact = ({  onAdd }) => {

    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [address, setAddress] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!firstName) {
          alert("Please add first name")
          return
        }

        else if (!lastName) {
            alert("Please add last name")
            return
        }

        else if (!address) {
            alert("Please add address")
            return
        }
    
        onAdd({ firstName, lastName, address })
    
        setFirstname("")
        setLastname("")
        setAddress("")
      }
    
    return(
        <>
            <Firstname type="text" placeholder="Add first name" value={firstName} onChange={(e) => setFirstname(e.target.value)}/>
            <Lastname type="text" placeholder="Add last name" value={lastName} onChange={(e) => setLastname(e.target.value)}/>
            <Address type="text" placeholder="Add address" value={address} onChange={(e) => setAddress(e.target.value)}/>
            <SubmitButton text="Add new Contact" handleClick={onSubmit} />
        </>
    )
} 

export default CreateContact


