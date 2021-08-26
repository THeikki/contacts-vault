import Contact from "./Contact"

const Contacts = ({ contacts, onDelete }) => {
    if (contacts.length === 0) {
        return (
            <div>
                No contacts to show
            </div>
        )
    }
    return (
        <>    
            {contacts.map(contact => 
                <Contact key={contact._id} contact={contact} onDelete={onDelete}/>                        
            )}            
        </>
    )
  }

export default Contacts