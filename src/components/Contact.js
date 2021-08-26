import DeleteButton from "./DeleteButton"

const Contact = ({ contact, onDelete }) => {
    return (
        <div className="contact">
            <p> {contact.firstName} </p>
            <p> {contact.lastName} </p> 
            <p> {contact.address} </p>
            <DeleteButton text="Delete" handleClick={() => onDelete(contact._id)} />
        </div>
    )
  }

export default Contact